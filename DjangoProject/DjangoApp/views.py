from django.shortcuts import render
from django.http import HttpResponse

from datetime import datetime

from django.shortcuts import render   # Added for this step

def about(request):
    return render(
        request,
        "DjangoApp/about.html",
        {
            'title' : "About HelloDjangoApp",
            'content' : "Example app page for Django."
        }
    )
