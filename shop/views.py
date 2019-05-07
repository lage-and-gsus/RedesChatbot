from django.shortcuts import render
from django.urls import reverse
from django.views.generic import DetailView, ListView, RedirectView, UpdateView, TemplateView
# Create your tests here.

class Indice(TemplateView):
    template_name = 'index.html'
