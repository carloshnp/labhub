import Cabinet from "./Cabinet"
import Panel from "./Panel"

export default function PanelContainer() {
    return (
        <div className="w-full flex">
            <Panel />
            <Panel />
        </div>
    )
};