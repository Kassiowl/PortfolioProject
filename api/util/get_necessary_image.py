def get_necessary_image_information(project_domain_list, project_image_dict):

    project_with_info_and_images = []

    for project_domain in project_domain_list:
        if project_domain.name.lower() in project_image_dict:
            project_image_dict[project_domain.name.lower()]['paragraph'] = project_domain.paragraph
            project_with_info_and_images.append(project_image_dict[project_domain.name.lower()])
    
    return project_with_info_and_images

def get_necessary_testimonial_information(testimonial_domain_list, testimonial_image_dict):
    
    testimonial_with_info_and_images = []

    for testimonial_domain in testimonial_domain_list:
        if(testimonial_domain.person_name.lower() in testimonial_image_dict):
            testimonial_image_dict[testimonial_domain.person_name.lower()]['persons_name'] = testimonial_domain.person_name
            testimonial_image_dict[testimonial_domain.person_name.lower()]['person_role'] = testimonial_domain.person_role
            testimonial_image_dict[testimonial_domain.person_name.lower()]['where'] = testimonial_domain.where
            testimonial_image_dict[testimonial_domain.person_name.lower()]['date'] = testimonial_domain.date
            testimonial_image_dict[testimonial_domain.person_name.lower()]['paragraph'] = testimonial_domain.paragraph
            testimonial_with_info_and_images.append(testimonial_image_dict[testimonial_domain.person_name.lower()])

    return testimonial_with_info_and_images
