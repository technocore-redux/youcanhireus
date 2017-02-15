# How to set up your dev environment

Welcome to Youcanhire.us!

This guide will walk you through the steps necessary to set up your
dev environment.

NOTE: this guide assumes you already have Python 2.7 installed on your system.
If you are a MacOS user, this should be true by default.

1.  Clone the repo from https://github.com/technocore-redux/youcanhireus.git

2.  Navigate to your folder containing the repo

3.  Set up your Python virtual environment:
    - If you don't pip installed, run "sudo easy_install pip"
    - Install virtualenv: "sudo pip install virtualenv"
    - In your repo folder, create a "venv" directory
    - Run: "virtualenv venv --python=python2.7"
    - After installation has run, activate your virtual environment
      by running: "source venv/bin/activate" (later, you can run "deactivate"
      to disable the virtual environment)

4.  Install the Python project dependencies (Django, etc.) by running:
    "pip install -r requirements.txt"

5. Now let's install our Node dependencies: "npm install"

6. You should have all the depencies necessary to run the site. Confirm
   by running "python manage.py runserver" and navigating to the generated
   URL. You should see the home page of our site.
