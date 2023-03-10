import FilterModule from './atoms/FilterModule';
import { TextField, FormControl, FormControlLabel, Radio, RadioGroup, Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { selectAdFilters, setAdFilter } from "../store/AdFiltersReducer";


const Filter = () => {
    const dispatch = useDispatch();
    const filters = useSelector(selectAdFilters);

    return (
        <div className="m-4 h-auto rounded-2xl border-2 w-fit bg-white p-5 shadow-lg" >
            <FilterModule title="Kategori" margin="mt-4" >
                <RadioGroup value={filters.category || ""} >
                    <Button onClick={() => dispatch(setAdFilter({ field: "category", value: "" }))}>Fjern kategori</Button>

                    <FormControlLabel sx={{ m: -1 }} control={<Radio />} label="Elektronikk" value="Elektronikk" onChange={(event: any) => {
                        dispatch(setAdFilter({ field: "category", value: "Elektronikk" }));
                    }} />
                    <FormControlLabel sx={{ m: -1 }} control={<Radio />} label="Hage" value="Hage" onChange={(event: any) => {
                        dispatch(setAdFilter({ field: "category", value: "Hage" }));
                    }} />
                    <FormControlLabel sx={{ m: -1 }} control={<Radio />} label="Håndverktøy" value="Håndverktøy" onChange={(event: any) => {
                        dispatch(setAdFilter({ field: "category", value: "Håndverktøy" }));
                    }} />
                    <FormControlLabel sx={{ m: -1 }} control={<Radio />} label="Maskineri" value="Maskineri" onChange={(event: any) => {
                        dispatch(setAdFilter({ field: "category", value: "Maskineri" }));
                    }} />
                    <FormControlLabel sx={{ m: -1 }} control={<Radio />} label="Bil og motorsykkel" value="Bil og motorsykkel" onChange={(event: any) => {
                        dispatch(setAdFilter({ field: "category", value: "Bil og motorsykkel" }));
                    }} />
                    <FormControlLabel sx={{ m: -1 }} control={<Radio />} label="Sykkel" value="Sykkel" onChange={(event: any) => {
                        dispatch(setAdFilter({ field: "category", value: "Sykkel" }));
                    }} />
                    <FormControlLabel sx={{ m: -1 }} control={<Radio />} label="Henger" value="Henger" onChange={(event: any) => {
                        dispatch(setAdFilter({ field: "category", value: "Henger" }));
                    }} />
                    <FormControlLabel sx={{ m: -1 }} control={<Radio />} label="Rør" value="Rør" onChange={(event: any) => {
                        dispatch(setAdFilter({ field: "category", value: "Rør" }));
                    }} />
                    <FormControlLabel sx={{ m: -1 }} control={<Radio />} label="Stiger" value="Stiger" onChange={(event: any) => {
                        dispatch(setAdFilter({ field: "category", value: "Stiger" }));
                    }} />
                </RadioGroup>
            </FilterModule>

            <FilterModule title="Pris" margin="mt-6">
                <div className="mt-5 flex flex-col justify-between h-auto gap-2">
                    <TextField label="Fra kr" type="number" variant="outlined" value={filters.minPrice} onChange={(event: any) => {
                        dispatch(setAdFilter({ field: "minPrice", value: event.target.value }));
                    }} />
                    <TextField label="Til kr" type="number" variant="outlined" value={filters.maxPrice} onChange={(event: any) => {
                        dispatch(setAdFilter({ field: "maxPrice", value: event.target.value }));
                    }} />
                </div>
            </FilterModule>

            <FilterModule title="Postnummer (± 50)" margin="my-8">
                <FormControl>
                    <TextField label="Postnummer" type="number" variant="outlined" value={filters.zipCode} onChange={(event: any) => {
                        dispatch(setAdFilter({ field: "zipCode", value: event.target.value })); // filterer på ± 50 
                    }} />
                </FormControl>
            </FilterModule>

        </div>
    );
}

export default Filter;
