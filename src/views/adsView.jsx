/* Rolling fake ads
_____________________________________
| ...   | ...              |        |
|       |__________________|        |
|       |                  |        |
|       |                  |        |
|       |                  |adsView |
|       |                  |        |
|       |                  |        |
|       |                  |        |
|_______|__________________|________|
*/
import { ref, watchEffect, onBeforeUnmount } from "vue";

export default {
  setup() {
    const adContext = import.meta.globEager("../ads/*.{png,jpg,jpeg,svg}");

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
      <div style="width: 100%; max-width: 100%; height: auto; max-height: 100%; overflow: hidden;">
        <img
          src={this.currentAdSource}
          alt="Ad"
          style="width: 100%; height: auto; max-width: 100%; max-height: 100%;"
        />
      </div>
    );
  },
};
