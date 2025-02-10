from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    Name = models.CharField(max_length=100, null=True, blank=True)
    image = models.ImageField(upload_to='',null=True, blank=True)
    Brand = models.CharField(max_length=100, null=True, blank=True)
    Category = models.CharField(max_length=100, null=True, blank=True)
    Description = models.TextField(max_length=1000, null=True, blank=True)
    Rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    NumReviews = models.IntegerField(null=True, blank=True, default=0)
    Price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)  # Updated max_digits
    CountInStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.Name

    class Meta:
        verbose_name_plural = 'Product'