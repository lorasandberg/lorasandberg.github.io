async function animateCards(direction: 'show' | 'hide', selectedProject: string | null = null) {

    return;

    const projectList: HTMLElement | null = document.getElementById("projects-list");
    let selectedPosition: DOMRect | null = null;

    if(projectList === null)
        return;

    // Wait for cards to flip.
    await new Promise(resolve => setTimeout(resolve, 500));

    let cards : Element[] = [];

    // Get all cards to animate and hide the real elements.
    for (let i = 0; i < projectList.childElementCount; i++) {
        const child = projectList.children[i];

        if (child.classList.contains("project-container")) {
            if(child.getAttribute("data-project-id") == selectedProject) {
                selectedPosition = child.getBoundingClientRect();
                child.style.zIndex = 1;
            }
            else {
                child.style.visibility = "hidden";
                cards.push(child);
            }
        }
    }

    let ghostCards : HTMLElement[] = []

    // Create ghost cards to animate in the place of the real cards.
    for(let i in cards) {
        const ghost = document.createElement("div");
        const card = cards[i];

        ghost.classList.add("card-flipside");
        ghost.style.top = `${card.getBoundingClientRect().top}px`;
        ghost.style.left = `${card.getBoundingClientRect().left}px`;

        cards[i]
        document.body.append(ghost);

        ghostCards.push(ghost);

    }
    
    // Animate ghost cards moving

    if(selectedPosition == null)
        return;

    for(let i in ghostCards) {
        const ghost = ghostCards[i];

        ghost.style.transition = "top 0.3s, left 0.3s";
        ghost.style.top = `${selectedPosition.top}px`;
        ghost.style.left = `${selectedPosition.left}px`;
    }

    await new Promise(resolve => setTimeout(resolve, 500));

    for (let i in ghostCards)
        ghostCards[i].remove();
    







}

export default animateCards;