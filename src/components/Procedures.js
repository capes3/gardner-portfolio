import React, {Component} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

class Procedures extends Component {
    constructor(props){
        super(props)
        this.state={
            showDentalExam : false,
            showDentalCleaning : false,
            showDigitalXRays : false,
            showPanoramicXRays : false,
            showFlourideTreatment : false,
            showSealants : false,
            showHomeCare : false,
            showCompositeFillings : false,
            showDentalImplants : false,
            showPorcelainCrowns : false,
            showPorcelainBridges : false,
            showDentures : false,
            showRootCanal : false,
            showTeethWhitening : false,
            showPeriodontal : false,
            showMaintenance : false
        }
    }


    toggleDentalExam = () =>{this.setState(prevState => ({showDentalExam: !prevState.showDentalExam}))}
    toggleDentalCleaning = () =>{this.setState(prevState => ({showDentalCleaning: !prevState.showDentalCleaning}))}
    toggleDigitalXRays = () =>{this.setState(prevState => ({showDigitalXRays: !prevState.showDigitalXRays}))}
    togglePanoramicXRays = () =>{this.setState(prevState => ({showPanoramicXRays: !prevState.showPanoramicXRays}))}
    toggleFlourideTreatment = () =>{this.setState(prevState => ({showFlourideTreatment: !prevState.showFlourideTreatment}))}
    toggleSealants = () =>{this.setState(prevState => ({showSealants: !prevState.showSealants}))}
    toggleHomeCare = () =>{this.setState(prevState => ({showHomeCare: !prevState.showHomeCare}))}
    toggleCompositeFillings = () =>{this.setState(prevState => ({showCompositeFillings: !prevState.showCompositeFillings}))}
    toggleDentalImplants = () =>{this.setState(prevState => ({showDentalImplants: !prevState.showDentalImplants}))}
    togglePorcelainCrowns = () =>{this.setState(prevState => ({showPorcelainCrowns: !prevState.showPorcelainCrowns}))}
    togglePorcelainBridges = () =>{this.setState(prevState => ({showPorcelainBridges: !prevState.showPorcelainBridges}))}
    toggleDentures = () =>{this.setState(prevState => ({showDentures: !prevState.showDentures}))}
    toggleRootCanal = () =>{this.setState(prevState => ({showRootCanal: !prevState.showRootCanal}))}
    toggleTeethWhitening = () =>{this.setState(prevState => ({showTeethWhitening: !prevState.showTeethWhitening}))}
    togglePeriodontal = () =>{this.setState(prevState => ({showPeriodontal: !prevState.showPeriodontal}))}
    toggleMaintenance = () =>{this.setState(prevState => ({showMaintenance: !prevState.showMaintenance}))}

render() {
    return(
        <div>
            <Navbar/>
            
            <div className="proceduresWrapper">   
            <h1>Dental Exams & Cleanings</h1>
                <h2 onClick={this.toggleDentalExam}>Dental Exam</h2>
                <div>
                    {this.state.showDentalExam ? <DentalExamParagraph/> : null}
                </div>    
                <h2 onClick={this.toggleDentalCleaning}>Professional Dental Cleaning</h2>
                <div>
                    {this.state.showDentalCleaning ? <DentalCleaningParagraph/> : null}
                </div>   
                <h2 onClick={this.toggleDigitalXRays}>Digital X-Rays</h2>
                <div>
                    {this.state.showDigitalXRays ? <DigitalXRaysParagraph/> : null}
                </div>   
                <h2 onClick={this.togglePanoramicXRays}>Panoramic X-Rays</h2>
                <div>
                    {this.state.showPanoramicXRays ? <PanoramicXRaysParagraph/> : null}
                </div>  
                <h2 onClick={this.toggleFlourideTreatment}>Flouride Treatment</h2>
                <div>
                    {this.state.showFlourideTreatment ? <FlourideTreatmentParagraph/> : null}
                </div>  
                <h2 onClick={this.toggleSealants}>Sealants</h2>
                <div>
                    {this.state.showSealants ? <SealantsParagraph/> : null}
                </div> 
                <h2 onClick={this.toggleHomeCare}>Home Care</h2>
                <div>
                    {this.state.showHomeCare ? <HomeCareParagraph/> : null}
                </div> 
            <h1>Restorations</h1>
                <h2 onClick={this.toggleCompositeFillings}>Composite Fillings</h2>
                <div>
                    {this.state.showCompositeFillings ? <CompositeFillingsParagraph/> : null}
                </div> 
                <h2 onClick={this.toggleDentalImplants}>Dental Implants</h2>
                <div>
                    {this.state.showDentalImplants ? <DentalImplantsParagraph/> : null}
                </div> 
                <h2 onClick={this.togglePorcelainCrowns}>Porcelain Crowns (Caps)</h2>
                <div>
                    {this.state.showPorcelainCrowns ? <PorcelainCrownsParagraph/> : null}
                </div> 
                <h2 onClick={this.togglePorcelainBridges}>Porcelain Fixed Bridges</h2>
                <div>
                    {this.state.showPorcelainBridges ? <PorcelainFixedBridgesParagraph/> : null}
                </div> 
                <h2 onClick={this.toggleDentures}>Dentures & Partial Dentures</h2>
                <div>
                    {this.state.showDentures ? <DenturesParagraph/> : null}
                </div> 
                <h2 onClick={this.toggleRootCanal}>Root Canal Therapy</h2>
                <div>
                    {this.state.showRootCanal ? <RootCanalParagraph/> : null}
                </div> 
            <h1>Cosmetic</h1>   
                <h2 onClick={this.toggleTeethWhitening}>Teeth Whitening</h2> 
                <div>
                    {this.state.showTeethWhitening ? <TeethWhiteningParagraph/> : null}
                </div> 
            <h2 onClick={this.togglePeriodontal}>Periodontal Disease</h2> 
            <div>
                    {this.state.showPeriodontal ? <PeriodontalDiseaseParagraph/> : null}
                </div> 
            <h2 onClick={this.toggleMaintenance}>Maintenance</h2>
            <div>
                    {this.state.showMaintenance ? <MaintenanceParagraph/> : null}
                </div> 
            </div>
            <div className="procedureFooter">
            <Footer/>
            </div>
        </div>
    )
}
}

class DentalExamParagraph extends Component{
    render(){
        return(
            <p>A comprehensive dental exam will be performed by your dentist at your initial dental visit.  At regular check-up exams, your dentist and hygienist will perform the following:
            Examination of diagnostic X-rays (radiographs): Essential for detection of decay, tumors, cysts, and bone loss.  X-rays also help determine tooth and root positions.
            Gum disease evaluation: Check the gums and bone around the teeth for any signs of periodontal disease.
            Examination of tooth decay: All tooth surfaces will be checked for decay with special dental instruments.
            Examination of existing restorations: Check current fillings, crowns, etc.
        </p>
        )
    }
}

class DentalCleaningParagraph extends Component{
    render(){
        return(
            <p>
                        Professional dental cleanings (dental prophylaxis) are usually performed by Registered Dental Hygienists.  Your cleaning appointment will include a dental exam and the following:
                        Removal of calculus (tartar): Calculus is hardened plaque that has been left on the tooth for some time and is now firmly attached to the tooth surface.  Calculus forms above and below the gum line and can only be removed with special dental instruments.
                        Removal of plaque: Plaque is a sticky, almost invisible film that forms on the teeth.  It is a growing colony of living bacteria, food debris, and saliva.  The bacteria produce toxins (poisons) that inflame the gums.  This inflammation is the start of periodontal disease!
                        Teeth polishing: Remove stain and plaque that is not otherwise removed during tooth brushing and scaling.

                    </p>
        )
    }
}

class DigitalXRaysParagraph extends Component{
    render(){
        return(
            <p>Digital radiography (digital X-ray) is the latest technology used to take dental X-rays.  This technique uses an electronic sensor (instead of X-ray film) that captures and stores the digital image on a computer.  This image can be instantly viewed and enlarged, helping the dentist and dental hygienist detect problems more easily.  Digital X-rays reduce radiation 80-90% compared to the already low exposure of traditional dental X-rays.
                    Dental X-rays are essential, preventative, diagnostic tools that provide valuable information not visible during a regular dental exam.  Dentists and dental hygienists use this information to safely and accurately detect hidden dental abnormalities and complete an accurate treatment plan.  Without X-rays, problem areas can go undetected.

                    Dental X-rays may reveal:

                    Abscesses or cysts.
                    Bone loss.
                    Cancerous and non-cancerous tumors.
                    Decay between the teeth.
                    Developmental abnormalities.
                    Poor tooth and root positions.
                    Problems inside a tooth or below the gum line.
                    Detecting and treating dental problems at an early stage can save you time, money, unnecessary discomfort, and your teeth!
                    Are dental X-rays safe?
                    We are all exposed to natural radiation in our environment.  Digital X-rays produce a significantly lower level of radiation compared to traditional dental x-rays.  Not only are digital X-rays better for the health and safety of the patient, they are faster and more comfortable to take, which reduces your time in the dental office.  Also, since the digital image is captured electronically, there is no need to develop the X-rays, thus eliminating the disposal of harmful waste and chemicals into the environment.
                    Even though digital X-rays produce a low level of radiation and are considered very safe, dentists still take necessary precautions to limit the patient’s exposure to radiation.  These precautions include only taking those X-rays that are necessary, and using lead apron shields to protect the body.
                    How often should dental X-rays be taken?
                    The need for dental X-rays depends on each patient’s individual dental health needs.  Your dentist and dental hygienist will recommend necessary X-rays based upon the review of your medical and dental history, a dental exam, signs and symptoms, your age, and risk of disease.
                    A full mouth series of dental X-rays is recommended for new patients.  A full series is usually good for three to five years.  Bite-wing X-rays (X-rays of top and bottom teeth biting together) are taken at recall (check-up) visits and are recommended once or twice a year to detect new dental problems.
                    </p>
        )
    }
}

class PanoramicXRaysParagraph extends Component{
    render(){
        return(
            <p>Panoramic X-rays (also known as Panorex® or orthopantomograms) are wraparound photographs of the face and teeth.  They offer a view that would otherwise be invisible to the naked eye.  X-rays in general, expose hidden structures, such as wisdom teeth, reveal preliminary signs of cavities, and also show fractures and bone loss.
            Panoramic X-rays are extraoral and simple to perform.  Usually, dental X-rays involve the film being placed inside the mouth, but panoramic film is hidden inside a mechanism that rotates around the outside of the head.
            Unlike bitewing X-rays that need to be taken every few years, panoramic X-rays are generally only taken on an as-needed basis.  A panoramic X-ray is not conducted to give a detailed view of each tooth, but rather to provide a better view of the sinus areas, nasal areas and mandibular nerve.  Panoramic X-rays are preferable to bitewing X-rays when a patient is in extreme pain, and when a sinus problem is suspected to have caused dental problems.
            Panoramic X-rays are extremely versatile in dentistry, and are used to:
            Assess patients with an extreme gag reflex.
            Evaluate the progression of TMJ.
            Expose cysts and abnormalities.
            Expose impacted teeth.
            Expose jawbone fractures.
            Plan treatment (full and partial dentures, braces and implants).
            Reveal gum disease and cavities.
            How are panoramic X-rays taken?
            The panoramic X-ray provides the dentist with an ear-to-ear two-dimensional view of both the upper and lower jaw.  The most common uses for panoramic X-rays are to reveal the positioning of wisdom teeth and to check whether dental implants will affect the mandibular nerve (the nerve extending toward the lower lip).
            The Panorex equipment consists of a rotating arm that holds the X-ray generator, and a moving film attachment that holds the pictures.  The head is positioned between these two devices.  The X-ray generator moves around the head taking pictures as orthogonally as possible.  The positioning of the head and body is what determines how sharp, clear and useful the X-rays will be to the dentist.  The pictures are magnified by as much as 30% to ensure that even the minutest detail will be noted.
            Panoramic X-rays are an important diagnostic tool and are also valuable for planning future treatment.  They are safer than other types of X-rays because less radiation enters the body.
            If you have questions or concerns about panoramic X-rays, please contact our practice.
            </p>
        )
    }
}

class FlourideTreatmentParagraph extends Component{
    render(){
        return(
            <p>Fluoride is the most effective agent available to help prevent tooth decay.  It is a mineral that is naturally present in varying amounts in almost all foods and water supplies.  The benefits of fluoride have been well known for over 50 years and are supported by many health and professional organizations.
            Fluoride works in two ways:
            Topical fluoride strengthens the teeth once they have erupted by seeping into the outer surface of the tooth enamel, making the teeth more resistant to decay.  We gain topical fluoride by using fluoride containing dental products such as toothpaste, mouth rinses, and gels.  Dentists and dental hygienists generally recommend that children have a professional application of fluoride twice a year during dental check-ups.
            Systemic fluoride strengthens the teeth that have erupted as well as those that are developing under the gums.  We gain systemic fluoride from most foods and our community water supplies.  It is also available as a supplement in drop or gel form and can be prescribed by your dentist or physician.  Generally, fluoride drops are recommended for infants, and tablets are best suited for children up through the teen years.  It is very important to monitor the amounts of fluoride a child ingests.  If too much fluoride is consumed while the teeth are developing, a condition called fluorosis (white spots on the teeth) may result.
            Although most people receive fluoride from food and water, sometimes it is not enough to help prevent decay.  Your dentist or dental hygienist may recommend the use of home and/or professional fluoride treatments for the following reasons:
            Deep pits and fissures on the chewing surfaces of teeth.
            Exposed and sensitive root surfaces.
            Fair to poor oral hygiene habits.
            Frequent sugar and carbohydrate intake.
            Inadequate exposure to fluorides.
            Inadequate saliva flow due to medical conditions, medical treatments or medications.
            Recent history of dental decay.
            Remember, fluoride alone will not prevent tooth decay!  It is important to brush at least twice a day, floss regularly, eat balanced meals, reduce sugary snacks, and visit your dentist on a regular basis.
            </p>
        )
    }
}

class SealantsParagraph extends Component{
    render(){
        return(
            <p>A sealant is a thin, plastic coating applied to the chewing surface of molars, premolars and any deep grooves (called pits and fissures) of teeth.  More than 75% of dental decay begins in these deep grooves.  Teeth with these conditions are hard to clean and are very susceptible to decay.  A sealant protects the tooth by sealing deep grooves, creating a smooth, easy to clean surface.
            Sealants can protect teeth from decay for many years, but need to be checked for wear and chipping at regular dental visits.
            Reasons for sealants:
            Children and teenagers – As soon as the six-year molars (the first permanent back teeth) appear or any time throughout the cavity prone years of 6-16.
            Adults – Tooth surfaces without decay that have deep grooves or depressions.
            Baby teeth – Occasionally done if teeth have deep grooves or depressions and child is cavity prone.
            What do sealants involve?
            Sealants are easily applied by your dentist or dental hygienist and the process takes only a couple of minutes per tooth.
            The teeth to be sealed are thoroughly cleaned and then surrounded with cotton to keep the area dry.  A special solution is applied to the enamel surface to help the sealant bond to the teeth.  The teeth are then rinsed and dried.  Sealant material is carefully painted onto the enamel surface to cover the deep grooves or depressions.  Depending on the type of sealant used, the material will either harden automatically or with a special curing light.
            Proper home care, a balanced diet, and regular dental visits will aid in the life of your new sealants.
            </p>
        )
    }
}

class HomeCareParagraph extends Component{
    render(){
        return(
            <p>A beautiful, healthy smile that lasts a lifetime is our ultimate goal when treating patients.  Your personal home care plays an important role in achieving that goal.  Your personal home care starts by eating balanced meals, reducing the number of snacks you eat, and correctly using the various dental aids that help control the plaque and bacteria that cause dental disease.
            Tooth brushing – Brush your teeth at least twice a day (especially before going to bed at night) with an ADA approved soft bristle brush and toothpaste.
            Place the brush at a 45 degree angle to the gums and gently brush using a small, circular motion, ensuring that you always feel the bristles on the gums.
            Brush the outer, inner, and biting surfaces of each tooth.
            Use the tip of the brush to clean the inside of the front teeth.
            Brush your tongue to remove bacteria and freshen your breath.
            Electric toothbrushes are also recommended.  They are easy to use and can remove plaque efficiently.  Simply place the bristles of the electric brush on your gums and teeth and allow the brush to do its job, several teeth at a time.
            Flossing – Daily flossing is the best way to clean between the teeth and under the gumline.  Flossing not only helps clean these spaces, it disrupts plaque colonies from building up, preventing damage to the gums, teeth, and bone.
            Take 12-16 inches of dental floss and wrap it around your middle fingers, leaving about 2 inches (5cm) of floss between the hands.
            Using your thumbs and forefingers to guide the floss, gently insert the floss between teeth using a sawing motion.
            Curve the floss into a “C” shape around each tooth and under the gumline.  Gently move the floss up and down, cleaning the side of each tooth.
            Floss holders are recommended if you have difficulty using conventional floss.
            Rinsing – It is important to rinse your mouth with water after brushing and after meals if you are unable to brush.  If you are using an over-the-counter product for rinsing, it’s a good idea to consult with your dentist or dental hygienist on its appropriateness for you.
            Use other dental aids as recommended by your dentist or dental hygienist:  interdental brushes, rubber tip stimulators, tongue cleaners, irrigation devices, fluoride, medicated rinses, etc., can all play a role in good dental home care.
            </p>
        )
    }
}

class CompositeFillingsParagraph extends Component{
    render(){
        return(
            <p>A composite (tooth colored) filling is used to repair a tooth that is affected by decay, cracks, fractures, etc.  The decayed or affected portion of the tooth will be removed and then filled with a composite filling.
            There are many types of filling materials available, each with their own advantages and disadvantages.  You and your dentist can discuss the best options for restoring your teeth.  Composite fillings, along with silver amalgam fillings, are the most widely used today.  Because composite fillings are tooth colored, they can be closely matched to the color of existing teeth, and are more aesthetically suited for use in front teeth or more visible areas of the mouth.
            As with most dental restorations, composite fillings are not permanent and may someday have to be replaced.  They are very durable and will last many years, giving you a long lasting, beautiful smile.
            Reasons for composite fillings:
            Chipped teeth.
            Closing space between two teeth.
            Cracked or broken teeth.
            Decayed teeth.
            Worn teeth.
            How are composite fillings placed?
            Composite fillings are usually placed in one appointment.  While the tooth is numb, your dentist will remove decay as needed.  The space will then be thoroughly cleaned and carefully prepared before the new filling is placed.  If the decay was near the nerve of the tooth, a special medication will be applied for added protection.  The composite filling will then be precisely placed, shaped, and polished, restoring your tooth to its original shape and function.
            It is normal to experience sensitivity to hot and cold when composite fillings are first placed, however this will subside shortly after your tooth acclimates to the new filling.
            </p>
        )
    }
}
class DentalImplantsParagraph extends Component{
    render(){
        return(
            <p>Dental implants are a great way to replace missing teeth and also provide a fixed solution to having removable partial or complete dentures.  Implants provide excellent support and stability for these dental appliances.
                    Dental implants are artificial roots and teeth (usually titanium) that are surgically placed into the upper or lower jaw bone by a dentist or Periodontist - a specialist of the gums and supporting bone.  The teeth attached to implants are very natural looking and often enhance or restore a patient’s smile!
                    Dental implants are strong and durable and will last many years.  On occasion, they will have to be re-tightened or replaced due to normal wear.
                    Reasons for dental implants:
                    Replace one or more missing teeth without affecting adjacent teeth.
                    Resolve joint pain or bite problems caused by teeth shifting into missing tooth space.
                    Restore a patient’s confident smile.
                    Restore chewing, speech, and digestion.
                    Restore or enhance facial tissues.
                    Support a bridge or denture, making it more secure and comfortable.
                    What does getting dental implants involve?
                    The process of getting implants requires a number of visits over several months.
                    X-rays and impressions (molds) are taken of the jaw and teeth to determine bone, gum tissue, and spacing available for an implant.  While the area is numb, the implant will be surgically placed into the bone and allowed to heal and integrate itself for up to six months.   Depending on the type of implant, a second surgery may be required in order to place the “post” that will hold the artificial tooth in place.  With other implants the post and anchor are already attached and placed at the same time.
                    After several weeks of healing the artificial teeth are made and fitted to the post portion of the anchor.  Because several fittings may be required, this step may take one to two months to complete.  After a healing period, the artificial teeth are securely attached to the implant, providing excellent stability and comfort to the patient.
                    You will receive care instructions when your treatment is completed.  Good oral hygiene and eating habits, alongside regular dental visits, will aid in the life of your new implant.
                    If you have questions about dental implants or would like to schedule a consultation, please contact our office.
                    </p>
        )
    }
}

class PorcelainCrownsParagraph extends Component{
    render(){
        return(
            <p>A crown (or cap) is a covering that encases the entire tooth surface restoring it to its original shape and size.  A crown protects and strengthens tooth structure that cannot be restored with fillings or other types of restorations.
                    Although there are several types of crowns, porcelain (tooth colored crown) are the most popular, because they resemble your natural teeth.  They are highly durable and will last many years, but like most dental restorations, they may eventually need to be replaced.  Porcelain crowns are made to match the shape, size, and color or your teeth giving you a natural, long-lasting beautiful smile.
                    Reasons for crowns:
                    Broken or fractured teeth.
                    Cosmetic enhancement.
                    Decayed teeth.
                    Fractured fillings.
                    Large fillings.
                    Tooth has a root canal.
                    What does getting a crown involve?
                    A crown procedure usually requires two appointments.  Your first appointment will include taking several highly accurate molds (or impressions) that will be used to create your custom crown.  A mold will also be used to create a temporary crown which will stay on your tooth for approximately two weeks until your new crown is fabricated by a dental laboratory.
                    While the tooth is numb, the dentist will prepare the tooth by removing any decay and shaping the surface to properly fit the crown.  Once these details are accomplished, your temporary crown will be placed with temporary cement and your bite will be checked to ensure you are biting properly.
                    At your second appointment your temporary crown will be removed, the tooth will be cleaned, and your new crown will be carefully placed to ensure the spacing and bite are accurate.
                    You will be given care instructions and encouraged to have regular dental visits to check your new crown.
                    </p>
        )
    }
}

class PorcelainFixedBridgesParagraph extends Component{
    render(){
        return(
            <p>A dental bridge is a fixed (non-removable) appliance and is an excellent way to replace missing teeth.
                    There are several types of bridges.  You and your dentist will discuss the best options for your particular case.  The “traditional bridge” is the most popular type and is usually made of porcelain fused to metal.  Porcelain fixed bridges are most popular because they resemble your natural teeth.  This type of bridge consists to two crowns that go over two anchoring teeth (abutment teeth) and are attached to pontics (artificial teeth), filling the gap created by one or more missing teeth.
                    Dental bridges are highly durable and will last many years; however, they may need replacement or need to be re-cemented due to normal wear.
                    Reasons for a fixed bridge:
                    Fill space of missing teeth.
                    Maintain facial shape.
                    Prevent remaining teeth from drifting out of position.
                    Restore chewing and speaking ability.
                    Restore your smile.
                    Upgrade from a removable partial denture to a permanent dental appliance.
                    What does getting a fixed bridge involve?
                    Getting a bridge usually requires two or more visits.  While the teeth are numb, the two anchoring teeth are prepared by removing a portion of enamel to allow for a crown.  Next, a highly accurate impression (mold) is made which will be sent to a dental laboratory where the bridge will be fabricated.  In addition, a temporary bridge will be made and worn for several weeks until your next appointment.
                    At the second visit, your permanent bridge will be carefully checked, adjusted, and cemented to achieve a proper fit.  Occasionally your dentist may only temporarily cement the bridge, allowing your teeth and tissue time to get used to the new bridge.  The new bridge will be permanently cemented at a later time.
                    You will receive care instructions at the conclusion of your treatment.  Proper brushing, flossing and regular dental visits will aid in the life of your new permanent bridge.
                    </p>
        )
    }
}

class DenturesParagraph extends Component{
    render(){
        return(
            <p>A denture is a removable dental appliance and a replacement for missing teeth and surrounding tissue.  They are made to closely resemble your natural teeth and may even enhance your smile.
                    There are two types of dentures - complete and partial dentures.  Complete dentures are used when all of the teeth are missing, while partial dentures are used when some natural teeth remain.  A partial denture not only fills in the spaces created by missing teeth, it prevents other teeth from shifting.
                    A complete denture can be either “conventional” or “immediate.”  A conventional type is made after the teeth have been removed and the gum tissue has healed (usually takes 4 to 6 weeks).  During this time, the patient will go without teeth.  Immediate dentures are made in advance and immediately placed after the teeth are removed, thus preventing the patient from having to be without teeth during the healing process.  Once the tissues shrink and heal, adjustments will have to be made.
                    Dentures are very durable appliances and will last many years but may have to be remade, repaired, or readjusted due to normal wear.
                    Reasons for dentures:
                    Complete Denture - Loss of all teeth in an arch.
                    Partial Denture - Loss of several teeth in an arch.
                    Enhancing smile and facial tissues.
                    Improving chewing, speech, and digestion.
                    What does getting dentures involve?
                    The process of getting dentures requires several appointments, usually over a period of several weeks.  Highly accurate impressions (molds) and measurements are taken and used to create your custom denture.  Several “try-in” appointments may be necessary to ensure proper shape, color, and fit.  At the final appointment, your dentist will precisely adjust and place the completed denture, ensuring a natural and comfortable fit.
                    It is normal to experience increased saliva flow, some soreness, and possible speech and chewing difficulty, however this will subside as your muscles and tissues get used to the new dentures.
                    You will be given care instructions for your new dentures.  Proper cleaning of your new dental appliance, good oral hygiene, and regular dental visits will aid in the life of your new dentures.
                    </p>
        )
    }
}

class RootCanalParagraph extends Component{
    render(){
        return(
            <p>Root canal therapy is needed when the nerve of a tooth is affected by decay or infection.  In order to save the tooth, the pulp (the living tissue inside the tooth), nerves, bacteria, and any decay are removed and the resulting space is filled with special, medicated, dental materials, which restore the tooth to its full function.
                    Having a root canal done on a tooth is the treatment of choice to save a tooth that otherwise would die and have to be removed.  Many patients believe that removing a tooth that has problems is the solution, but what is not realized is that extracting (pulling) a tooth will ultimately be more costly and cause significant problems for adjacent teeth.
                    Root canal treatment is highly successful and usually lasts a lifetime, although on occasion, a tooth will have to be retreated due to new infections.
                    Signs and symptoms for possible root canal therapy:
                    An abscess (or pimple) on the gums.
                    Sensitivity to hot and cold.
                    Severe toothache pain.
                    Sometimes no symptoms are present.
                    Swelling and/or tenderness.
                    Reasons for root canal therapy:
                    Decay has reached the tooth pulp (the living tissue inside the tooth).
                    Infection or abscess have developed inside the tooth or at the root tip.
                    Injury or trauma to the tooth.
                    What does root canal therapy involve?
                    A root canal procedure requires one or more appointments and can be performed by a dentist or endodontist (a root canal specialist).
                    An access opening is made on top of the tooth and a series of root canal files are placed into the opening, one at a time, removing the pulp, nerve tissue, and bacteria.  If tooth decay is present, it will also be removed with special dental instruments.
                    Once the tooth is thoroughly cleaned, it will be sealed with either a permanent filling or, if additional appointments are needed, a temporary filling will be placed.
                    At the next appointment the roots and the inside cavity of the tooth will be filled and sealed with special dental materials.  A filling will be placed to cover the opening on top of the tooth.  In addition, all teeth that have root canal treatment should have a crown (cap) placed.  This will protect the tooth and prevent it from breaking, and restore it to its full function.
                    After treatment, your tooth may still be sensitive, but this will subside as the inflammation diminishes and the tooth has healed.
                    You will be given care instructions after each appointment.  Good oral hygiene practices and regular dental visits will aid in the life of your root canal treatment.
                    </p>
        )
    }
}

class TeethWhiteningParagraph extends Component{
    render(){
        return(
            <p>Teeth whitening (or bleaching) is a simple, non-invasive dental treatment used to change the color of natural tooth enamel and is an ideal way to enhance the beauty of your smile.
                    Because having whiter teeth has now become the number one aesthetic concern of most patients, there are a number of ways to whiten teeth.  Since teeth whitening only works on natural tooth enamel, it is important to evaluate replacement of any old fillings, crowns, etc.  Replacement of any restorations will be done after bleaching so they will match the newly bleached teeth.
                    Teeth whitening is not permanent.  A touch-up may be needed every several years, and more often if you smoke, drink coffee, tea, or wine.
                    Reasons for teeth whitening:
                    Fluorosis (excessive fluoridation during tooth development).
                    Normal wear of outer tooth layer.
                    Stained teeth due to medications (tetracycline, etc.).
                    Yellow, brown stained teeth.
                    What does teeth whitening involve?
                    At home whitening usually requires one visit. At this appointment, impressions (molds) will be made of your teeth to fabricate custom, clear, plastic, trays. The trays are worn with special whitening solution once a day for 30 minutes for a couple of weeks depending on the degree of staining and desired level of whitening. 
                    Opalescence Boost in-office power whitener is a chemically activated gel that provides brighter, whiter teeth after just 40 minutes in the dental chair. The powerful 40% hydrogen peroxide gel is chemically activated, so it doesn’t require a hot, uncomfortable light to work. Using the unique double-syringe configuration, the clinician activates the 40% hydrogen peroxide formula just prior to application, ensuring every dose of Opalescence Boost whitening is fresh and effective.
                    Chemically activated, so no light is needed
                    Powerful 40% hydrogen peroxide gel
                    Opalescence tooth whitening gel contains PF (potassium nitrate and fluoride)
                    Fresh chemical for each application
                    Precise delivery
                    Easy to see for complete removal
                    Two 20-minute applications for a total of 40 minutes of treatment time​
                    It is normal to experience tooth sensitivity during the time you are whitening your teeth, but it will subside shortly after you have stopped bleaching.
                    You will receive care instructions for your teeth and trays, and be encouraged to visit your dentist regularly to help maintain a beautiful, healthy, white smile.
                    </p>
        )
    }
}


class PeriodontalDiseaseParagraph extends Component{
    render(){
        return(
            <p>What is Periodontal (Gum) Disease?
                    The term “periodontal” means “around the tooth.”  Periodontal disease (also known as periodontitis and gum disease) is a common inflammatory condition that affects the supporting and surrounding soft tissues of the tooth, eventually affecting the jawbone itself in the disease’s most advanced stages.
                    Periodontal disease is most often preceded by gingivitis which is a bacterial infection of the gum tissue.  A bacterial infection affects the gums when the toxins contained in plaque begin to irritate and inflame the gum tissues.  Once this bacterial infection colonizes in the gum pockets between the teeth, it becomes much more difficult to remove and treat.  Periodontal disease is a progressive condition that eventually leads to the destruction of the connective tissue and jawbone.  If left untreated, it can cause shifting teeth, loose teeth, and eventually tooth loss. 
                    Periodontal disease is the leading cause of tooth loss among adults in the developed world and should always be promptly treated.
                    Types of Periodontal Disease
                    When left untreated, gingivitis (mild gum inflammation) can spread to below the gum line.  When the gums become irritated by the toxins contained in plaque, a chronic inflammatory response causes the body to break down and destroy its own bone and soft tissue.  There may be little or no symptoms as periodontal disease causes the teeth to separate from the infected gum tissue.  Deepening pockets between the gums and teeth are generally indicative that soft tissue and bone is being destroyed by periodontal disease.
                    Here are some of the most common types of periodontal disease:
                    Chronic periodontitis – Inflammation within supporting tissues cause deep pockets and gum recession.  It may appear the teeth are lengthening, but in actuality, the gums (gingiva) are receding.  This is the most common form of periodontal disease and is characterized by progressive loss of attachment, interspersed with periods of rapid progression.
                    Aggressive periodontitis – This form of gum disease occurs in an otherwise clinically healthy individual.  It is characterized by rapid loss of gum attachment, chronic bone destruction and familial aggregation.
                    Necrotizing periodontitis – This form of periodontal disease most often occurs in individuals suffering from systemic conditions such as HIV, immunosuppression and malnutrition.  Necrosis (tissue death) occurs in the periodontal ligament, alveolar bone and gingival tissues.
                    Periodontitis caused by systemic disease – This form of gum disease often begins at an early age.  Medical condition such as respiratory disease, diabetes and heart disease are common cofactors.
                    Treatment for Periodontal Disease
                    There are many surgical and nonsurgical treatments the periodontist may choose to perform, depending upon the exact condition of the teeth, gums and jawbone.  A complete periodontal exam of the mouth will be done before any treatment is performed or recommended.
                    Here are some of the more common treatments for periodontal disease:
                    Scaling and root planning – In order to preserve the health of the gum tissue, the bacteria and calculus (tartar) which initially caused the infection, must be removed.  The gum pockets will be cleaned and treated with antibiotics as necessary to help alleviate the infection.  A prescription mouthwash may be incorporated into daily cleaning routines.
                    Tissue regeneration – When the bone and gum tissues have been destroyed, regrowth can be actively encouraged using grafting procedures.  A membrane may be inserted into the affected areas to assist in the regeneration process.
                    Pocket elimination surgery – Pocket elimination surgery (also known as flap surgery) is a surgical treatment which can be performed to reduce the pocket size between the teeth and gums.  Surgery on the jawbone is another option which serves to eliminate indentations in the bone which foster the colonization of bacteria.
                    Dental implants – When teeth have been lost due to periodontal disease, the aesthetics and functionality of the mouth can be restored by implanting prosthetic teeth into the jawbone.  Tissue regeneration procedures may be required prior to the placement of a dental implant in order to strengthen the bone.
                    Please contact our office if you have questions or concerns about periodontal disease, periodontal treatment, or dental implants.
                    </p>
        )
    }
}

class MaintenanceParagraph extends Component{
    render(){
        return(
            <p>It only takes twenty four hours for plaque that is not removed from your teeth to turn into calculus (tartar)!  Daily home cleaning helps control plaque and tartar formation, but those hard to reach areas will always need special attention.
                    Once your periodontal treatment has been completed, your dentist and dental hygienist will recommend that you have regular maintenance cleanings (periodontal cleanings), usually four times a year.  At these cleaning appointments, the pocket depths will be carefully checked to ensure that they are healthy.  Plaque and calculus that is difficult for you to remove on a daily basis will be removed from above and below the gum line.
                    In addition to your periodontal cleaning and evaluation, your appointment will usually include:
                    Examination of diagnostic x-rays (radiographs): Essential for detection of decay, tumors, cysts, and bone loss. X-rays also help determine tooth and root positions.
                    Examination of existing restorations: Check current fillings, crowns, etc.
                    Examination of tooth decay: Check all tooth surfaces for decay.
                    Oral hygiene recommendations: Review and recommend oral hygiene aids as needed. (Electric toothbrushes, special periodontal brushes, fluorides, rinses, etc.)
                    Teeth polishing: Remove stain and plaque that is not otherwise removed during tooth brushing and scaling.
                    Good oral hygiene practices and periodontal cleanings are essential in maintaining dental health and keeping periodontal disease under control!
                    </p>
        )
    }
}




export default Procedures