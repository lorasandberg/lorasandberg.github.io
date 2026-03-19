import ProjectLayout, { ProjectContent, ProjectImage, ProjectTech, ProjectTitle } from "./__ProjectLayout";
import project_image from './images/timeline_game.jpg';

function TimelineCardGame() {

    return <ProjectLayout>
        <ProjectTitle>Timeline Card Game</ProjectTitle>
        <ProjectImage image={project_image} alt={"Photo of cards set on a table, forming a timeline."} />
        <ProjectContent>
            <p>The goal of the project is to create a free-to-download card game for highschool history teachers in Québec province, Canada. The game content follows the Québec highscool history program.</p>
            <ProjectTitle>How the game works</ProjectTitle>
            <p>Shortly, the players need to create a timeline of historical events by sorting a set of cards chronologically. Players start with five cards, and every turn they place a card on the timeline. If it's placed correctly, the card stays there. If it's placed incorrectly, the card is removed and the player has to draw a new card. The player who empties their hand first wins.</p>
            <ProjectTitle>How is it going</ProjectTitle>
            <p>We are running our first testing round currently. The game has a bit  under 300 cards, covering events in the first and second year of the history study program. Printing sets of hundreds of cards can get expensive, so we're testing the game with prototype visuals until release.</p>
            <ProjectTitle>Who are working on it</ProjectTitle>
            <p>The project was started by a Québec highscool history teacher who just happens to be my spouse, and I'm contributing to the project by designing the card layouts and making a software for creating and managing the two-sided cards and preparing them for printing.</p>
            <ProjectTech list={["React", "TypeScript", "React-pdf"]} />
        </ProjectContent>
    </ProjectLayout>
}

export default TimelineCardGame;