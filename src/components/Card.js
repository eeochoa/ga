

export default function CardComponent() {

return(

    <div className="col-12 xl:col-12">
        <div className="card mb-6">
            <div className="flex justify-content-between mb-5">
                <div>
                    <span className="block text-500 font-medium mb-5">Number of Dashboards</span>
                    <div className="text-900 font-medium text-xl">1001</div>
                </div>
            </div>
            <span className="text-green-500 font-medium">24 new </span>
            <span className="text-500">since last visit</span>
        </div>
    </div>
    );
};