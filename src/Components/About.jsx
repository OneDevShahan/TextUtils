import React, { useState } from 'react'

export default function About(props) {

    const myStyle = {
        color: props.mode === 'Dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'Dark' ? '#042743' : 'white'
    }

  return (
    <div className='container my-3' style={myStyle}>
        <h1>About Us</h1>
        <div class="accordion" id="accordionExample">
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header">
                <button class="accordion-button" style={{backgroundColor: props.mode === 'Dark' ? '#09658e' : 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Empowering Text Masters</strong>
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                    TextUtils is your one-stop shop for mastering your text magic!
                    Whether you're a student crafting impactful essays, a writer perfecting your prose,
                    or a professional juggling complex reports, our diverse tools simplify your journey.
                    From grammar wizardry and plagiarism slaying to lightning-fast summaries and insightful analysis,
                    we equip you to conquer any text challenge with confidence.
                </div>
                </div>
            </div>
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" style={{backgroundColor: props.mode === 'Dark' ? '#09658e' : 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Built by Word Enthusiasts, for Word Enthusiasts</strong>
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                    We're a passionate team of language geeks and tech wizards, united by a love for the power of clear,
                    impactful communication. Whether you're a student yearning for academic success,
                    a writer striving for polished prose, or a professional seeking communication clarity,
                    we understand your needs and are dedicated to creating tools that truly empower you. 
                </div>
                </div>
            </div>
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" style={{backgroundColor: props.mode === 'Dark' ? '#09658e' : 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Your Text Transformation Journey Starts Here</strong>
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={myStyle}>
                    Join the thousands of text enthusiasts already benefiting from Text Utils!
                    We're constantly evolving, fueled by your feedback and the ever-expanding realm of language technology.
                    Explore our ever-growing suite of tools, dive into helpful resources, and connect with our supportive community.
                    Let Text Utils be your companion on your path to text mastery!
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
