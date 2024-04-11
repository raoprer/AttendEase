from django.db import models

class Institute(models.Model):
    i_id = models.AutoField(primary_key=True)
    i_code = models.CharField(max_length=500)
    i_name = models.CharField(max_length=500)
    i_password = models.CharField(max_length=500)
    i_dp = models.CharField(max_length=500)
    location = models.CharField(max_length=500)
    address = models.CharField(max_length=500)
    university = models.CharField(max_length=500)

class Degree(models.Model):
    d_id = models.AutoField(primary_key=True)
    d_code = models.CharField(max_length=500)
    d_name = models.CharField(max_length=500)
    duration = models.IntegerField()
    description = models.CharField(max_length=500)

class Course(models.Model):
    c_id = models.AutoField(primary_key=True)
    d_id = models.ForeignKey(Degree, on_delete=models.CASCADE)
    c_code = models.CharField(max_length=500)
    c_name = models.CharField(max_length=500)
    credits = models.IntegerField()

class Faculty(models.Model):
    f_id = models.AutoField(primary_key=True)
    i_id = models.ForeignKey(Institute, on_delete=models.CASCADE)
    emp_id = models.CharField(max_length=500)
    f_name = models.CharField(max_length=500)
    f_dp = models.CharField(max_length=500)
    university = models.CharField(max_length=500)
    f_password = models.CharField(max_length=500)

class Student(models.Model):
    s_id = models.AutoField(primary_key=True)
    i_id = models.ForeignKey(Institute, on_delete=models.CASCADE)
    reg_no = models.CharField(max_length=500)
    s_name = models.CharField(max_length=500)
    semester = models.IntegerField()
    degree = models.CharField(max_length=500)
    s_password = models.CharField(max_length=500)
    university = models.CharField(max_length=500)
    s_dp = models.CharField(max_length=500)
    img1 = models.CharField(max_length=500)
    img2 = models.CharField(max_length=500)
    img3 = models.CharField(max_length=500)
    img4 = models.CharField(max_length=500)
    img5 = models.CharField(max_length=500)

class Schedule(models.Model):
    sch_id = models.AutoField(primary_key=True)
    c_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    day = models.CharField(max_length=500)
    time = models.TimeField()

class HasDegree(models.Model):
    i_id = models.ForeignKey(Institute, on_delete=models.CASCADE)
    d_id = models.ForeignKey(Degree, on_delete=models.CASCADE)
    class Meta:
        unique_together = ('i_id', 'd_id')

class Teaches(models.Model):
    f_id = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    c_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    class Meta:
        unique_together = ('f_id', 'c_id')

class Learns(models.Model):
    s_id = models.ForeignKey(Student, on_delete=models.CASCADE)
    c_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    attendance = models.IntegerField()
    class Meta:
        unique_together = ('s_id', 'c_id')
