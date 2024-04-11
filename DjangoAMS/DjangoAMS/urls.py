"""
URL configuration for DjangoAMS project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, re_path, include
from django.contrib import admin
from AttendEase import views

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('institute', views.instituteApi),
    re_path(r'^institute/([0-9]+)$', views.instituteApi),

    path('degree', views.degreeApi),
    re_path(r'^degree/([0-9]+)$', views.degreeApi),
    
    path('course', views.courseApi),
    re_path(r'^course/([0-9]+)$', views.courseApi),

    path('faculty', views.facultyApi),
    re_path(r'^faculty/([0-9]+)$', views.facultyApi),

    path('student', views.studentApi),
    re_path(r'^student/([0-9]+)$', views.studentApi),

    path('schedule', views.scheduleApi),
    re_path(r'^schedule/([0-9]+)$', views.scheduleApi),

    path('hasdegree', views.hasDegreeApi),
    re_path(r'^hasdegree/([0-9]+)$', views.hasDegreeApi),

    path('teaches', views.teachesApi),
    re_path(r'^teaches/([0-9]+)$', views.teachesApi),

    path('learns', views.learnsApi),
    re_path(r'^learns/([0-9]+)$', views.learnsApi),
]

