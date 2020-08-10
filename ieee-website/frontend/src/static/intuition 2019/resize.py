import cv2 
import os
import numpy
import glob

import re

def natural_sort(l): 
    convert = lambda text: int(text) if text.isdigit() else text.lower() 
    alphanum_key = lambda key: [ convert(c) for c in re.split('([0-9]+)', key) ] 
    return sorted(l, key = alphanum_key)

img_arr = []
file_arr=[]

for filename in glob.glob('*.jpg'):
        file_arr.append(filename)
# print('ordering files')
# file_arr = natural_sort(file_arr)
height=3000
width=None
for filename in file_arr:
    img= cv2.imread(filename)
    h, w, layers = img.shape
    
    if width is None:
        # calculate the ratio of the height and construct the
        # dimensions
        r = height / float(h)
        dim = (int(w * r), height)
    resized = cv2.resize(img, dim, interpolation = cv2.INTER_AREA)
    cv2.imwrite(filename,resized)


# output = cv2.VideoWriter('CenterNet birdview 3D detection.mp4',0x7634706d, 25, size)

# fourcc = cv2.VideoWriter_fourcc(*"mp4v")
# output = cv2.VideoWriter('3D detection.mp4',fourcc, 25, size)

# fourcc = cv2.VideoWriter_fourcc(*'XVID')
# output = cv2.VideoWriter('3D detection.avi',fourcc, 25, size)

# for i in range(len(img_arr)):
#     output.write(img_arr[i])

# output.release()
