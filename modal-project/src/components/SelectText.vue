<template>
  <span v-for="(word, index) in sentenceArray" :key="index">
    <span v-if="index > 0">&nbsp;</span> <!-- Add space before each word except the first one -->
    <span>
      <span :class="{ 'highlighted': isHighlighted(index) }" @click="toggleHighlight(index)">{{ word }}</span>
    </span>
  </span>
  <p v-if="highlightedCategory !== null">{{ getCategoryDescription(highlightedCategory) }}</p>
</template>


<script>
export default {
  name: 'TextLine',
  data() {
    return {
      sentence: "+1 200 +AtkM Plant Essence Awakening Tahtab Timber Thrash vs. 200 HP / 0 DefM Enchanted Coat Jellusa: 193-228 (94.1 - 111.2%) -- guaranteed OHKO after 1 layer of barbs",
      sentenceArray: [],
      wordCategories: {
        statStage: ['+1'], // Stat stage category
        trainingPoints: ['200', '/', '0'], // Training points category
        personality: ['+AtkM', 'DefM', 'HP'], // Personality category
        item: ['Plant', 'Essence'], // Item category
        ability: ['Awakening', 'Enchanted', 'Coat'], // Ability category
        loomian: ['Tahtab', 'Jellusa:'], // Loomian category
        move: ['Timber', 'Thrash'], // Move category
        healthPoints: ['193-228'], // Health points category
        healthPercentage: ['(94.1', "-", '111.2%)'], // Health percentage category
        summary: ['--', 'guaranteed', 'OHKO'], // Summary category
        extraInfo: ['after', '1', 'layer', 'of', 'barbs'], // Extra information category
        trash: ['vs.']
      },
      highlightedCategory: null
    };
  },
  created() {
    this.sentenceArray = this.sentence.split(/\s+/); // Split the sentence into an array of words
  },
  methods: {
    toggleHighlight(index) {
      const word = this.sentenceArray[index];
      const category = this.getWordCategory(word);
      if (category === this.highlightedCategory) {
        // Deselect all words in the same category if any word in the category is clicked
        this.highlightedCategory = null;
      } else {
        this.highlightedCategory = category;
      }
    },
    isHighlighted(index) {
      const word = this.sentenceArray[index];
      const category = this.getWordCategory(word);
      return category === this.highlightedCategory;
    },
    getWordCategory(word) {
      // Get the category of the specified word
      for (const category in this.wordCategories) {
        if (this.wordCategories[category].includes(word)) {
          return category;
        }
      }
      return null; // Return null if the word doesn't belong to any category
    },
    getCategoryDescription(category) {
      // Get the description for the specified category
      switch (category) {
        case 'statStage':
          return 'Refers to any increase/decrease in Stats. The Maxmimum is +6 while the Minimum is -6.';
        case 'trainingPoints':
          return 'Refers to the Training Points of the Loomians.';
        case 'personality':
          return 'Refers to the Stats and any Personalities that affects the Calculation. "+" is a 10% increase, "++" is a 20% increase, "-" is a 10% decrease and "--" is a 20% decrease.';
        case 'item':
          return 'Refers to the Item. This is included if it affects the damage output of the move or the damage taken by the move.'
        case 'ability':
          return 'Refers to the ability being used. These are only included if they affect the damage output.';
        case 'loomian':
          return 'The Loomians used in the Calculation. It will always show the Attacker before the Defender.';
        case 'move':
          return 'The Move being used to attack the Opponent.';
        case 'healthPoints':
          return 'The Range of health that is deducted in the attack presented as points.';
        case 'healthPercentage':
          return 'The range of health deducted in the attack presented as a percentage.';
        case 'summary':
          return 'A Quick summary of many attacks are needed to knock out the opponent. Anything less than 5 hits is treated as negligible.';
        case 'extraInfo':
          return 'If any extra obstacles are placed on the field that increase the damage output such as barbs, they are included after the summary.';
        default:
          return '';
      }
    }
  }
};
</script>

<style scoped>
.highlighted {
  font-weight: bold;
  cursor: pointer;
  color: yellow;
}

span {
  color: inherit; /* Ensure all text is non-highlighted by default */
}

* {
  width: 60%;
  margin: auto;
}
</style>
