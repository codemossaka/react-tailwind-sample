
type NamedRouteProps = {
    outlets?: Array<{ name: string; content: JSX.Element; }>;
    outletName?: string;
};
const NamedRoute = (props: NamedRouteProps) => {
    const {outlets, outletName} = props;
    const matchedOutlet = outlets!!.find((outlet) => {
        console.log(outlet)
        return outlet.name === outletName;
    });
    if (!matchedOutlet) {
        return null;
    } else {
        return matchedOutlet.content
    }
};

export default NamedRoute;