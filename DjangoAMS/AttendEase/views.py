from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from AttendEase.models import Institute, Degree, Course, Faculty, Student, Schedule, HasDegree, Teaches, Learns
from AttendEase.serializers import InstituteSerializer, DegreeSerializer, CourseSerializer, FacultySerializer, StudentSerializer, ScheduleSerializer, HasDegreeSerializer, TeachesSerializer, LearnsSerializer

from django.core.files.storage import default_storage

from django.http import JsonResponse

@csrf_exempt
def instituteApi(request,id=0):
    if request.method=='GET':
        institutes = Institute.objects.all()
        institutes_serializer=InstituteSerializer(institutes,many=True)
        return JsonResponse(institutes_serializer.data,safe=False)
    elif request.method=='POST':
        institute_data=JSONParser().parse(request)
        institutes_serializer=InstituteSerializer(data=institute_data)
        if institutes_serializer.is_valid():
            institutes_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        institute_data=JSONParser().parse(request)
        institute=Institute.objects.get(InstituteId=institute_data['InstituteId'])
        institutes_serializer=InstituteSerializer(institute,data=institute_data)
        if institutes_serializer.is_valid():
            institutes_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        institute=Institute.objects.get(InstituteId=id)
        institute.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def degreeApi(request, id=0):
    if request.method == 'GET':
        degrees = Degree.objects.all()
        degree_serializer = DegreeSerializer(degrees, many=True)
        return JsonResponse(degree_serializer.data, safe=False)
    
    elif request.method == 'POST':
        degree_data = JSONParser().parse(request)
        degree_serializer = DegreeSerializer(data=degree_data)
        if degree_serializer.is_valid():
            degree_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        degree_data = JSONParser().parse(request)
        degree = Degree.objects.get(d_id=degree_data['d_id'])
        degree_serializer = DegreeSerializer(degree, data=degree_data)
        if degree_serializer.is_valid():
            degree_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == 'DELETE':
        degree = Degree.objects.get(d_id=id)
        degree.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def courseApi(request, id=0):
    if request.method == 'GET':
        courses = Course.objects.all()
        course_serializer = CourseSerializer(courses, many=True)
        return JsonResponse(course_serializer.data, safe=False)
    
    elif request.method == 'POST':
        course_data = JSONParser().parse(request)
        course_serializer = CourseSerializer(data=course_data)
        if course_serializer.is_valid():
            course_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        course_data = JSONParser().parse(request)
        course = Course.objects.get(c_id=course_data['c_id'])
        course_serializer = CourseSerializer(course, data=course_data)
        if course_serializer.is_valid():
            course_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == 'DELETE':
        course = Course.objects.get(c_id=id)
        course.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def facultyApi(request, id=0):
    if request.method == 'GET':
        faculties = Faculty.objects.all()
        faculty_serializer = FacultySerializer(faculties, many=True)
        return JsonResponse(faculty_serializer.data, safe=False)
    
    elif request.method == 'POST':
        faculty_data = JSONParser().parse(request)
        faculty_serializer = FacultySerializer(data=faculty_data)
        if faculty_serializer.is_valid():
            faculty_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        faculty_data = JSONParser().parse(request)
        faculty = Faculty.objects.get(f_id=faculty_data['f_id'])
        faculty_serializer = FacultySerializer(faculty, data=faculty_data)
        if faculty_serializer.is_valid():
            faculty_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == 'DELETE':
        faculty = Faculty.objects.get(f_id=id)
        faculty.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def studentApi(request, id=0):
    if request.method == 'GET':
        students = Student.objects.all()
        student_serializer = StudentSerializer(students, many=True)
        return JsonResponse(student_serializer.data, safe=False)
    
    elif request.method == 'POST':
        student_data = JSONParser().parse(request)
        student_serializer = StudentSerializer(data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        student_data = JSONParser().parse(request)
        student = Student.objects.get(s_id=student_data['s_id'])
        student_serializer = StudentSerializer(student, data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == 'DELETE':
        student = Student.objects.get(s_id=id)
        student.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def scheduleApi(request, id=0):
    if request.method == 'GET':
        schedules = Schedule.objects.all()
        schedule_serializer = ScheduleSerializer(schedules, many=True)
        return JsonResponse(schedule_serializer.data, safe=False)
    
    elif request.method == 'POST':
        schedule_data = JSONParser().parse(request)
        schedule_serializer = ScheduleSerializer(data=schedule_data)
        if schedule_serializer.is_valid():
            schedule_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        schedule_data = JSONParser().parse(request)
        schedule = Schedule.objects.get(sch_id=schedule_data['sch_id'])
        schedule_serializer = ScheduleSerializer(schedule, data=schedule_data)
        if schedule_serializer.is_valid():
            schedule_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == 'DELETE':
        schedule = Schedule.objects.get(sch_id=id)
        schedule.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def hasDegreeApi(request, id=0):
    if request.method == 'GET':
        has_degrees = HasDegree.objects.all()
        has_degree_serializer = HasDegreeSerializer(has_degrees, many=True)
        return JsonResponse(has_degree_serializer.data, safe=False)
    
    elif request.method == 'POST':
        has_degree_data = JSONParser().parse(request)
        has_degree_serializer = HasDegreeSerializer(data=has_degree_data)
        if has_degree_serializer.is_valid():
            has_degree_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        has_degree_data = JSONParser().parse(request)
        has_degree = HasDegree.objects.get(i_id=has_degree_data['i_id'])
        has_degree_serializer = HasDegreeSerializer(has_degree, data=has_degree_data)
        if has_degree_serializer.is_valid():
            has_degree_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == 'DELETE':
        has_degree = HasDegree.objects.get(i_id=id)
        has_degree.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def teachesApi(request, id=0):
    if request.method == 'GET':
        teaches = Teaches.objects.all()
        teaches_serializer = TeachesSerializer(teaches, many=True)
        return JsonResponse(teaches_serializer.data, safe=False)
    
    elif request.method == 'POST':
        teaches_data = JSONParser().parse(request)
        teaches_serializer = TeachesSerializer(data=teaches_data)
        if teaches_serializer.is_valid():
            teaches_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        teaches_data = JSONParser().parse(request)
        teaches = Teaches.objects.get(f_id=teaches_data['f_id'])
        teaches_serializer = TeachesSerializer(teaches, data=teaches_data)
        if teaches_serializer.is_valid():
            teaches_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == 'DELETE':
        teaches = Teaches.objects.get(f_id=id)
        teaches.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def learnsApi(request, id=0):
    if request.method == 'GET':
        learns = Learns.objects.all()
        learns_serializer = LearnsSerializer(learns, many=True)
        return JsonResponse(learns_serializer.data, safe=False)
    
    elif request.method == 'POST':
        learns_data = JSONParser().parse(request)
        learns_serializer = LearnsSerializer(data=learns_data)
        if learns_serializer.is_valid():
            learns_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method == 'PUT':
        learns_data = JSONParser().parse(request)
        learns = Learns.objects.get(s_id=learns_data['s_id'])
        learns_serializer = LearnsSerializer(learns, data=learns_data)
        if learns_serializer.is_valid():
            learns_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method == 'DELETE':
        learns = Learns.objects.get(s_id=id)
        learns.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    
@csrf_exempt
def faculty_courses(request, faculty_id):
    if request.method == 'GET':
        try:
            faculty = Faculty.objects.get(id=faculty_id)
            courses = Course.objects.filter(teaches__f_id=faculty)
            course_data = [{'id': course.id, 'c_code': course.c_code, 'c_name': course.c_name, 'credits': course.credits} for course in courses]
            return JsonResponse(course_data, safe=False)
        except Faculty.DoesNotExist:
            return JsonResponse({'error': 'Faculty not found'}, status=404)

@csrf_exempt
def upload_file(request):
    if request.method == 'POST' and request.FILES['file']:
        file = request.FILES['file']
        file_name = default_storage.save('Photos/' + file.name, file)
        return JsonResponse({'message': 'File uploaded successfully', 'file_name': file_name}, status=200)
    else:
        return JsonResponse({'error': 'File not provided or request method not allowed'}, status=400)
