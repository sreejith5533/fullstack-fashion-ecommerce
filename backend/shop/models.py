from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.



class Product(models.Model):
  name = models.CharField(max_length=255)
  short_description = models.CharField(max_length=150,default="")
  description = models.TextField(blank=True)
  price = models.DecimalField(max_digits=10,decimal_places=2)
  image = models.ImageField(upload_to='product_images',blank=True)
  ratings = models.PositiveIntegerField(default=0,validators=[
    MinValueValidator(0),
    MaxValueValidator(5),
  ])
  is_active  = models.BooleanField(default=True)
  specifications = models.JSONField(blank=True,null=True)
  stock = models.PositiveIntegerField(default=1)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name
  

class Cart(models.Model):
  created_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f"Cart {self.id}"
  





class CartItem(models.Model):
  product = models.ForeignKey(Product,on_delete=models.CASCADE)
  cart = models.ForeignKey(Cart,on_delete=models.CASCADE,related_name='items')
  quantity = models.PositiveIntegerField(default=1)

  def __str__(self):
    return f"{self.quantity} x {self.product.name} in Cart {self.cart.id}"


class Banner(models.Model):
  title = models.CharField(max_length=255)
  image = models.ImageField(upload_to='banners/')
  is_active = models.BooleanField(default=True)
  description =   models.TextField(blank=True)


  def __str__(self):
    return self.title
  



