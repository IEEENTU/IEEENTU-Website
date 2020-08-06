from django.shortcuts import render
from backend.forms import FormName
from django.http import HttpResponseRedirect
from .models import Database
# Create your views here.


def form_view(request):
    form = FormName()

    if request.method == 'POST':
        form = FormName(request.POST)

        if form.is_valid():

            # create database object and save the information in the database
            content = Database()
            content.name = request.POST.get('name')
            content.email = request.POST.get('email')
            content.url = request.POST.get('url')
            content.text = request.POST.get('text')
            content.save()

            print("\n\n\n")
            print("Validation SUCCESS!!")
            print("Name: "+form.cleaned_data['name'])
            print("Email: "+form.cleaned_data['email'])
            print("Text: "+form.cleaned_data['text'])
            print("URL: "+form.cleaned_data['url'])
            return HttpResponseRedirect('http://127.0.0.1:8000/')

    dict = {'form': form}
    return render(request, 'firstform.html', context=dict)
