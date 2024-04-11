from rest_framework import serializers
from AttendEase.models import Institute, Degree, Course, Faculty, Student, Schedule, HasDegree, Teaches, Learns

class InstituteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Institute
        fields = '__all__'

class DegreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Degree
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'

class HasDegreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = HasDegree
        fields = '__all__'

class TeachesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teaches
        fields = '__all__'

class LearnsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Learns
        fields = '__all__'
