import React, {useState} from 'react';



const TypeWriter = ({toWrite}) => {
	const [ phraseIndex, setPhraseIndex ] = useState(0); //index of phrase to write
	const [ phraseCharIndex, setPhraseCharIndex ] = useState(0); //index of character in phrase to write
	const [ isDeleting, setIsDeleting ] = useState(false); //flag to delete characters

	const written = () => {
		if (!isDeleting && (phraseCharIndex < toWrite[phraseIndex].length)) //writes phrase 
			setPhraseCharIndex(phraseCharIndex+1);
		else if (isDeleting && (phraseCharIndex > -1)) //deletes phrase
			setPhraseCharIndex(phraseCharIndex-1);

		if(phraseCharIndex === toWrite[phraseIndex].length-1) {//wrote to end of phrase, set to delete
			setIsDeleting(true);
		}
		if(isDeleting && (phraseCharIndex === 0)) { //deleted all of phrase, set to write next phrase
			if(phraseIndex+1 === toWrite.length)
				setPhraseIndex(0);
			else setPhraseIndex(phraseIndex+1);
			setIsDeleting(false);
		}
	}
	setTimeout(written, 150);

	let toReturn = toWrite[phraseIndex].substring(0, phraseCharIndex);
	// console.log(toReturn,'hyh');
	return <div>{toReturn}</div>;

};


export default TypeWriter;