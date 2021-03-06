# Generated by Django 3.0.8 on 2020-08-04 10:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Database',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('url', models.URLField()),
                ('text', models.CharField(max_length=300)),
            ],
        ),
        migrations.DeleteModel(
            name='Post',
        ),
    ]
