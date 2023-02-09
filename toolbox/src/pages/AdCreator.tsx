import Textbox from "../components/Textbox";
import AdCreatorStep from "../components/AdCreatorStep";
import { MenuItem, Select, TextField, Button, FormControl, InputLabel, ImageListItem, ImageList } from "@mui/material";

const AdCreator = () => {
    return (
        <div className="flex flex-col w-full justify-center">
            <Textbox title="Opprett annonse
            " >
            
                <p>
                Start utlån allerede i dag. Følg stegene, så er annonsen din oppe og går i løpet av kort tid!
                </p>
            </Textbox>

            <div className="flex w-full flex-col justify-center">
                <AdCreatorStep step={1} title="Kategori">
                    <p>Velg en passende kategori så brukere enkelt kan finne annonsen din. Sjekk gjerne at valgt kategori inneholder lignende produkter.</p>
                    <br/>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Kategori</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={}
                            label="Kategori"
                            // onChange={handleChange}
                            variant="filled"
                        >
                            <MenuItem value="Håndverktøy">Håndverktøy</MenuItem>
                            <MenuItem value="Hage">Hage</MenuItem>
                            <MenuItem value="Henger">Henger</MenuItem>
                            <MenuItem value="Elektronikk">Elektronikk</MenuItem>
                            <MenuItem value="Bil">Bil og Motorsykkel</MenuItem>
                            <MenuItem value="Sykkel">Sykkel</MenuItem>
                            <MenuItem value="Stiger">Stiger</MenuItem>
                            <MenuItem value="Maskineri">Maskineri</MenuItem>
                            <MenuItem value="Rør">Rør</MenuItem>
                        </Select>
                    </FormControl>
                </AdCreatorStep>

                <AdCreatorStep step={2} title="Tittel og beskrivelse">
                    <p> Velg en kort og beskrivende tittel. Legg til en mer detaljert beskrivelse så bruker kan få mer informasjon om produktet når de trykker på annonsen. </p>
                    <br/>
                    <TextField
                        label="Tittel"
                        variant="filled"
                        fullWidth
                    />
                    <br />


                    <TextField
                        multiline
                        minRows={4}
                        label="Beskrivelse"
                        variant="filled"
                        fullWidth
                    />
                </AdCreatorStep>
                <AdCreatorStep step={3} title="Bilder">
                    <p>Vis frem produktet så brukere kan se hva du leier ut. Vi anbefaler 3-5 bilder for best resultat. Trykk på boksene eller bruk knappen.</p> 
                <br/>

                <ImageList sx={{ width: 500, height: "auto" }} cols={3} rowHeight={164}>
                {/* {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))} */}
</ImageList>
                <Button
                variant="outlined"
                className="w-1/3"
                color="primary"
                sx={{
                    ':hover': {
                      bgcolor: 'blue', 
                      color: 'white',
                    },
                  }}>Last opp bilder</Button></AdCreatorStep>
                <AdCreatorStep step={4} title="Pris"> <TextField
                    label="Velg pris"
                    variant="filled"
                    fullWidth
                /></AdCreatorStep>
                <AdCreatorStep step={5} title="Sted"> <TextField
                    label="Gateadresse"
                    variant="filled"
                    fullWidth
                />
                <br />
                    <TextField
                        label="Postnr."
                        variant="filled"
                        className="w-1/2"
                    />
                    <TextField
                        label="Sted"
                        variant="filled"
                        className="w-1/2"

                    /></AdCreatorStep>






            </div>
<div className = "flex-row">
            <Button
                variant="outlined"
                className="w-1/6"
                color="primary"
                sx={{
                    ':hover': {
                      bgcolor: 'blue', 
                      color: 'white',
                    },
                  }}>
                Publiser annonse
            </Button>
            <Button
                variant="outlined"
                className="w-1/6"
                color="primary"
                sx={{
                    ':hover': {
                      bgcolor: 'blue', 
                      color: 'white',
                    },
                  }} >
                Forhåndsvisning            </Button>      </div>  </div>
    );
};

export default AdCreator;