from django.shortcuts import render
from django.http import HttpResponse

from datetime import datetime

from django.shortcuts import render   # Added for this step

def index(request):
    now = datetime.now()

    return render(
        request,
        "DjangoApp/index.html",  # Relative path from the 'templates' folder to the template file
        # "index.html", # Use this code for VS 2017 15.7 and earlier
    )

def about(request):
    return render(
        request,
        "DjangoApp/about.html",
    )