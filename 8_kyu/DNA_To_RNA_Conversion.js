// PROBLEM: Create a function which translates a given DNA string into RNA.
// EXAMPLES: "GCAT"  =>  "GCAU"

// SOLUTION BY SHABAB HUSSAIN:

function DNAtoRNA(dna) {
    rna = dna.replaceAll('T', 'U')
    console.log(rna)
    return rna
    // create a function which returns an RNA sequence from the given DNA sequence
  }

DNA = 'GCAT'
DNAtoRNA(DNA)