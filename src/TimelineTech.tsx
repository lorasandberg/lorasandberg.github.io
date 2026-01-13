function TimelineTech(props: any) {
    const { position, children } = props;

    return <div className="tech" style={{ left: (position * 100) + "%" }}><span>{children}</span></div>
}

export default TimelineTech