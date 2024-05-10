<template>
    <h1 id="UsageTiers">Usage Tiers</h1>
    <p>Usage Lists are an excellent medium for understanding the current meta, whats popular and what what isn't being used. 
        Usage lists are divided into different tiers which can have various cut-off points depending on the usage collector.
    </p>
    <div v-for="(Term, index) in Terms" :key="index" class="container">
        {{Term.Term}} - {{ Term.Explanation }}
    </div>
</template>
  
<script>

export default {
    name: "UsageTerms",
    data() {
        return {
            Terms: [
                {
                    Term: `AG`,
                    Explanation: `Anything Goes; Loomians that are banned in Uber Tournements and Below.`,
                },
                {
                    Term: `Ubers`,
                    Explanation: `Loomians that deemed to over-cntralizing in Tournaments and therefore banned. These Loomians can be used in their own tier.`,
                },
                {
                    Term: `OU`,
                    Explanation: `OverUsed; Loomians that do meet the minimum usage requirement in a normal competitive tournement `,
                },
                {
                    Term: `UUBL`,
                    Explanation: `UnderUsed Banlist; Loomians that do not meet the usage amount in an OU Tournament.`,
                },
                {
                    Term: `UU`,
                    Explanation: `UnderUsed; Loomians that do not meet the usage amount in an OU Tournament.`,
                },
                {
                    Term: `NUBL`,
                    Explanation: `NeverUsed Banlist; Loomians that do not meet the usage amount in a UU Tournament but are too powerful to be used in an NU Tournament.`,
                },
                {
                    Term: `NU`,
                    Explanation: `NeverUsed; Loomians that do not meet the usage amount in a UU Tournament.`,
                },
            ]        
        };
    }
};
</script>
<style scoped>
    .container {
        background-color: #004691;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        margin-bottom: 10px;
        text-align: left;
    }
</style>
