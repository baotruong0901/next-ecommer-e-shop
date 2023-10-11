"use client"

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { OptionsPrice } from '@/constants';

const SortByPrice = () => {
    const router = useRouter();
    const [options, setOptions] = useState(OptionsPrice);
    const [selected, setSelected] = useState<string>(options[0].value);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const minPrice = urlParams.get('minPrice');
        const maxPrice = urlParams.get('maxPrice');

        const selectedValue = `${minPrice}-${maxPrice}`;

        options.map((option) => {
            if (option.value === selectedValue) {
                setSelected(option.value)
            }
        });
    }, [options])

    const handleUpdateParams = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedValue = e.target.value
        setSelected(selectedValue)
        const searchParams = new URLSearchParams(window.location.search)
        const [minPrice, maxPrice] = selectedValue.split('-');
        if (minPrice) {
            searchParams.set("minPrice", minPrice.toLowerCase());
        } else {
            searchParams.delete("minPrice");
        }

        if (maxPrice) {
            searchParams.set("maxPrice", maxPrice.toLowerCase());
        } else {
            searchParams.delete("maxPrice");
        }
        // }
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`
        router.push(newPathname)
    }


    return (
        <div className="mb-4">
            <FormControl>
                <FormLabel className="font-semibold" id="radio-buttons-group-label">
                    Mức giá
                </FormLabel>
                <RadioGroup
                    aria-labelledby="radio-buttons-group-label"
                    value={selected}
                    onChange={(e) => { handleUpdateParams(e) }}
                    name="radio-buttons-group"
                >
                    {options?.length > 0 && options.map((item) => (
                        <FormControlLabel key={item.label} value={item.value} control={<Radio />} label={item.label} />
                    ))}

                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default SortByPrice;