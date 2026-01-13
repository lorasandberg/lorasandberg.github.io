import Grid from '@mui/material/Grid'
import { Stack, Typography } from '@mui/material'

function Education(props: any) {
    const { title, school, start_year, end_year, summary, logo_file, tech, labels } = props
    const logo = new URL(`./assets/${logo_file}`, import.meta.url).href

    return (
        <Grid size={12} container gap={5} className="whitebox">
            <Grid size={{xs: 12, sm: 12, md: 3 }}  display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <img className='org_logo' src={logo} />
            </Grid>
            <Grid size="grow">
                <Stack spacing={1}>
                    <Typography variant='h6' component="h3">{title}</Typography>
                    <Typography>{school}, {start_year} - {end_year}</Typography>
                    <Typography>{summary}</Typography>                    
                    <p>
                        {tech?.map((label: string) => <span className="tag tech">{label}</span> )}
                        {labels?.map((label: string) => <span className="tag">{label}</span> )}
                    </p>
                </Stack>
                
            </Grid>
        </Grid>
    )
}

export default Education