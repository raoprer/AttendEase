from django.conf.urls import url
from AttendEase import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^institute$',views.instituteApi),
    url(r'^institute/([0-9]+)$',views.instituteApi),

    url(r'^degree$',views.instituteApi),
    url(r'^degree/([0-9]+)$',views.instituteApi),

    url(r'^course$',views.courseApi),
    url(r'^course/([0-9]+)$',views.courseApi),

    url(r'^student$',views.studentApi),
    url(r'^student/([0-9]+)$',views.studentApi),

    url(r'^schedule$',views.scheduleApi),
    url(r'^schedule/([0-9]+)$',views.scheduleApi),

    url(r'^hasdegree$',views.hasDegreeApi),
    url(r'^hasDegree/([0-9]+)$',views.hasDegreeApi),

    url(r'^teaches$',views.teachesApi),
    url(r'^teaches/([0-9]+)$',views.teachesApi),

    url(r'^learns$',views.learnsApi),
    url(r'^learns/([0-9]+)$',views.learnsApi),
]