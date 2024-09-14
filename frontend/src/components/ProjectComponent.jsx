import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

function ProjectComponent({project}) {
    console.log(project);
    return (
        //bg-white/20 dark:bg-default-100/50 
        <Card className="p-6 m-10 border-2 border-white-600 rounded-xl max-w-[610px]">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{project.title}</p>
            {
                project.tags.map((tag) => (
                    <small key={tag} className="text-default-500">{tag}</small>
                ))
            }
            <small className="text-default-500">{project.description}</small>
            {/* <h4 className="font-bold text-large">{project.title}</h4> */}
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={project.image ?? "https://nextui.org/images/hero-card-complete.jpeg"}
              width={270}
            />
          </CardBody>
        </Card>
      );
}

export default ProjectComponent;