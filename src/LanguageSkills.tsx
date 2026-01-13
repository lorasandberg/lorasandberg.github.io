import { Grid } from "@mui/material"

function LanguageSkills() {

    const languages = [
        { name: "Finnish", text: "First language (C2)" },
        { name: "English", text: "Fluent (C2)" },
        { name: "Japanese", text: "Conversational level (B1)" },
        { name: "French", text: "Early conversational (B1), actively learning" },
        { name: "German", text: "Basics (A2)" },
        { name: "Swedish", text: "Basics (A2)" }
    ]
    


    return (<>
    
    <h2>Language skills</h2>
    <Grid container gap={1} size={12} justifyItems={"center"} justifyContent={"center"} className="whitebox">
        {languages.map((lang) => {
            return <>
            <Grid size={12} container justifyItems={"center"} sx={{ maxWidth: "600px" }}>
                <Grid size={12}><strong>{lang.name}</strong></Grid>
                <Grid size={12}>{lang.text}</Grid>
            </Grid>
            </>
        })}
    </Grid>
    </>)
}

export default LanguageSkills