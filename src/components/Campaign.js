
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Campaign() {
    const url = 'https://dream-backers-crowdfunding-np.cyclic.cloud/api/v1/campaign';
    const [campaigns, setCampaigns] = useState([])


    console.log(localStorage.getItem('token'));
    useEffect(() => {
        try {
            fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    console.log(data.filteredCampaign)
                        setCampaigns(data.filteredCampaign)

                })
        } catch (error) {
            console.log(error);
        }
    }, [])


    return (
        <div className="text-center grid justify-items-center" id="jobs">
            {campaigns.length === 0 ? (
                <h1 className="text-center text-2xl mt-4">NO Campaign to show</h1>
            ) : (
                campaigns.map((campaign) => {
                    return (
                        <div key={campaign._id} className="my-4 p-4 border border-gray-300">
                                <h2 className="text-xl font-semibold mb-2">{campaign.title}</h2>
                                <p className="text-gray-700 mb-4">{campaign.story}</p>
                                <p className="text-gray-600 mb-2">Category: {campaign.category}</p>
                                <img src={`data:image/jpeg;base64,${campaign.img}`} alt="image" style={{height:200,width:200}} />
                                <p className="text-gray-600 mb-2">Status: {campaign.status}</p>
                                <p className="text-green-600 mb-2">Funds Raised: {campaign.fundsRaised}</p>
                                <p className="text-red-600 mb-2">Funds Needed: {campaign.fundsNeeded}</p>
                                <p className="text-yellow-600 mb-2">Progress: {campaign.progress}</p>
                                <p className="text-gray-600 mb-2">Fundraising Period: {campaign.FundraisingPeriod} days</p>
                                <p className="text-gray-600 mb-2">Created By: {campaign.creatorName}</p>
            
                        </div>
                    );
                })
            )}
        </div>

    );
}

export default Campaign;