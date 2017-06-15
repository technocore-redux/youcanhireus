import datetime
import json
import requests
import sys

from bs4 import BeautifulSoup


url = "https://news.ycombinator.com/item?id=14460779"
req = None
results = {}
now = datetime.datetime.now()

# Fetch the site data
try:
    req = requests.get(url)
    req.raise_for_status()
except Exception as e:
    print("Error while fetching URL: {}".format(e))

# Process data if fetch was successful
if req is None:
    sys.exit()

results = {
    "meta": {
        "url": url,
        "fetched_at": now.strftime("%Y-%m-%d %HH-%MM-%SS"),
    },
    "data": [],
}

soup = BeautifulSoup(req.content, "lxml")
posts = soup.find_all('td', class_="default")

for p in posts:
    entry = {}
    entry["username"] = p.find('a', class_="hnuser").text
    comment = p.find('div', class_="comment")

    for line in comment.stripped_strings:
        info = line.split(":")

        if len(info) >= 2:
            entry[info[0]] = "".join(info[1:])

    results["data"].append(entry)


filename = now.strftime("%Y-%m-%d.txt")

with open(filename, 'w') as file:
    file.write(json.dumps(results, indent=4, separators=(',', ': ')))
