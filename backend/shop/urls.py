from django.urls import path
from . import views

urlpatterns = [
  path('api/products/',views.product_list),
  path("api/products/<int:id>/", views.product_details),
  path('api/cart/add/',views.add_to_cart),
  path('api/banners/',views.banner_list),
  path('api/ai_chat/',views.ai_chat),
]
  