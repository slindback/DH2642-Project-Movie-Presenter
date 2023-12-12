import "/src/style.css";

import { ref, watchEffect, onBeforeUnmount } from "vue";


// TODO: standardize this very non-standard view
export const AdsView = {
  setup() {
    const adContext = import.meta.globEager("/img/ads/*.jpg");

    // Array of ad sources
    const adSources = Object.values(adContext).map((module) => module.default);

    // Index to track the current ad
    const currentAdIndex = ref(0);

    // Display the current ad
    const currentAdSource = ref(adSources[currentAdIndex.value]);

    // Function to update the ad source
    const updateAd = () => {
      currentAdIndex.value = (currentAdIndex.value + 1) % adSources.length;
    };

    // Set up the interval to change the ad every 10 seconds
    const intervalId = setInterval(updateAd, 10000);

    // Cleanup the interval when the component is unmounted
    onBeforeUnmount(() => {
      clearInterval(intervalId);
    });

    // Watch for changes in currentAdIndex and update the ad source
    watchEffect(() => {
      const newAdSource = adSources[currentAdIndex.value];
      currentAdSource.value = newAdSource;
    });

    return {
      currentAdSource,
    };
  },

  render() {
    return (
      <img className="adImage"
        src = {this.currentAdSource}
      />
    );
  },
};
