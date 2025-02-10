import React, { useEffect } from 'react';

function DonateButton({campaignId}) {
   console.log(campaignId)

  useEffect(() => {
    
    const paypalScript = document.createElement('script');
    paypalScript.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js';
    paypalScript.charset = 'UTF-8';
    paypalScript.async = true;

    document.body.appendChild(paypalScript);


    paypalScript.onload = () => {
      window.PayPal.Donation.Button({
        env: 'sandbox',
        hosted_button_id: 'MK5HTTMC29FGL',
        image: {
          src: 'https://media.istockphoto.com/id/1180825857/vector/donate-now-button-donate-now-rounded-red-sign-donate-now.jpg?s=612x612&w=0&k=20&c=BKX542wEjrORFBSZwCGz4i8LkVxX0MRo6rAAaFz4TuI=',
          alt: 'Donate with PayPal button',
          title: 'PayPal - The safer, easier way to pay online!',
        },
        onComplete: function (params) {
          // Handle successful payment
          try{ 
            const url=`https://dream-backers-crowdfunding-np.cyclic.cloud/api/v1/payment/${campaignId}/onsuccess`
            fetch(url, {
                method: 'PATCH',
                headers: {
                    Authorization:`Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify( params)
            }).then((response) => response.json())
                .then((data) => {
                    console.log(data);

                })

          }catch(error){
            console.log(error)
          }
          console.log('Payment completed:', params);
        },
      }).render(`#donate-button${campaignId}`);
    };

    return () => {
      document.body.removeChild(paypalScript);
    };
  }, []);

  return (
    <div id={`donate-button-container-${campaignId}`}>
      <div id={`donate-button${campaignId}` }className="donationbutton"  style={{width:"200px" }}></div>
    </div>
  );
}

export default DonateButton;