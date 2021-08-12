from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.utils.text import slugify
from django.contrib import messages
from django.core.mail import send_mail

from env import keys

def landing(request):
    print("\nLanding page\n")
    return render(request, "main/landing.html")