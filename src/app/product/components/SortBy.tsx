"use client"

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


interface Props {
    data?: {
        value: string,
        label: string
    }[],
    label: string,
    type: string
}
const SortBy = ({ data, label, type }: Props) => {
    const router = useRouter()
    const [options, setOptions] = useState<any>(data)
    const [selected, setSelected] = useState<any>(options[0].value);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const searchParam = urlParams.get(type);

        options.map((option: any) => {
            if (option.value === searchParam) {
                setSelected(option.value)
            }
        });
    }, [options])

    const handleUpdateParams = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedValue = e.target.value
        setSelected(selectedValue)
        const searchParams = new URLSearchParams(window.location.search)
        if (selectedValue === "") {
            searchParams.delete(type);
        } else {
            // Ngược lại, set giá trị "brand" trong searchParams
            searchParams.set(type, selectedValue.toLowerCase());
        }
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`
        router.push(newPathname)
    };

    return (
        <div className="mb-4">
            <FormControl>
                <FormLabel className='font-semibold' id="radio-buttons-group-label">
                    {label}
                </FormLabel>
                <RadioGroup
                    aria-labelledby="radio-buttons-group-label"
                    value={selected}
                    onChange={(e) => { handleUpdateParams(e) }}
                    name="radio-buttons-group"
                >
                    {options?.length > 0 && options.map((item: any) => (
                        <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />
                    ))}
                </RadioGroup>
            </FormControl>
        </div >
    );
}

export default SortBy;