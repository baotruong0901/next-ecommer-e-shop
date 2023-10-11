import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";


interface Props {
    paths: {
        label: string,
        link?: string
    }[]
}
const BreadCrumd = ({ paths }: Props) => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            {paths.map((path, index) => (
                index === paths.length - 1 ? (
                    <Typography key={index} className="text-gray-600">{path.label}</Typography>
                ) : (
                    <Link key={index} className="text-blue-500" href={path.link || ''}>
                        {path.label}
                    </Link>
                )
            ))}
        </Breadcrumbs>
    );
}

export default BreadCrumd;