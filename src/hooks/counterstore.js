import { create } from "zustand";

const useCounterState = create((set) => ({
    counter: 0,
    response:null,
    increment: () => set((state) => ({
        counter: state.counter + 1,
    })),
    decrement: () => set((state) => ({
        counter: state.counter - 1,
    })),

    apicall: async () => {
        try {
          const response = await fetch('https://dummyjson.com/products/1', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            
          });
     
          if (response.ok) {
            // If the API call is successful, update the counter locally
          var appdata=await response.json();
            set((state) => ({ response:  appdata }));
          } else {
            // Handle error scenarios if needed
            console.error('Failed to increment counter:', response.status, response.statusText);
          }
        } catch (error) {
          // Handle any unexpected errors during the API call
          console.error('Error during increment API call:', error);
        }
      },

}))


export default useCounterState;