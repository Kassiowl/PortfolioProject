import json

from Domain.entities.testimonial import Testimonial


def get_testimonials():
   json_open = open("repo/personal_info/personal_info_repo/personal_info.json", "r")
   json_loads = json.loads(json_open.read())
   
   testimonials = json_loads['testimonials']

   testimonials_list = []
   for testimonial in testimonials:
      testimonial_append = Testimonial(testimonials[testimonial]['name'], testimonials[testimonial]['role'], testimonials[testimonial]['where'], 
                                       testimonials[testimonial]['date'], testimonials[testimonial]['paragraphs'])
      testimonials_list.append(testimonial_append)
   
   json_open.close()
   return testimonials_list
