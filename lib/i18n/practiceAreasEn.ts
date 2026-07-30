import type { PracticeArea } from "@/lib/practiceAreas";

export type PracticeAreaTranslation = Pick<
  PracticeArea,
  "title" | "metaTitle" | "metaDescription" | "intro" | "sections" | "faq"
>;

export type PracticeAreaHomepageBullets = {
  title: string;
  bullets: string[];
};

export const homepageBulletsEn: Record<string, PracticeAreaHomepageBullets> = {
  "ceza-hukuku": {
    title: "Criminal Law",
    bullets: [
      "Defence representation during investigation and prosecution",
      "Pre-trial detention appeals and judicial control",
      "Legal support during custody and questioning",
      "Compensation claims for unjust detention",
    ],
  },
  "is-hukuku": {
    title: "Labour Law",
    bullets: [
      "Severance and notice pay claims",
      "Reinstatement claims",
      "Overtime and employee receivables",
      "Objections to unjust/invalid termination",
    ],
  },
  "gayrimenkul-hukuku": {
    title: "Real Estate Law",
    bullets: [
      "Title deed annulment and registration cases",
      "Rent assessment and eviction cases",
      "Condominium and common area disputes",
      "Title deed annulment for testator's collusion",
    ],
  },
  "miras-hukuku": {
    title: "Inheritance Law",
    bullets: [
      "Abatement cases (reserved share violations)",
      "Will annulment cases",
      "Renunciation of inheritance applications",
      "Estate division and termination of co-ownership",
    ],
  },
  "borclar-hukuku": {
    title: "Law of Obligations",
    bullets: [
      "Debt claims and enforcement proceedings",
      "Compensation for breach of contract",
      "Unjust enrichment claims",
      "Cases to annul objections",
    ],
  },
  "aile-hukuku": {
    title: "Family Law",
    bullets: [
      "Uncontested and contested divorce",
      "Custody and personal relations arrangements",
      "Alimony claims",
      "Matrimonial property liquidation cases",
    ],
  },
  "vergi-hukuku": {
    title: "Tax Law",
    bullets: [
      "Litigation against tax/penalty notices",
      "Pre- and post-assessment settlement",
      "Advisory during tax audits",
      "Annulment cases before tax courts",
    ],
  },
  "icra-iflas-hukuku": {
    title: "Enforcement and Bankruptcy Law",
    bullets: [
      "Initiating enforcement without a judgment",
      "Objecting to payment orders",
      "Cases to annul/remove objections",
      "Concordat applications",
    ],
  },
  "idare-hukuku": {
    title: "Administrative Law",
    bullets: [
      "Annulment actions against administrative acts",
      "Full remedy (compensation) actions",
      "Stay of execution requests",
      "Appeals against disciplinary penalties",
    ],
  },
  "tazminat-hukuku": {
    title: "Compensation Law",
    bullets: [
      "Traffic accident compensation cases",
      "Non-pecuniary damages cases",
      "Loss-of-support compensation",
      "Vehicle value loss claims",
    ],
  },
  "tahkim-arabuluculuk": {
    title: "Arbitration and Mediation",
    bullets: [
      "Mandatory mediation process",
      "Arbitration in commercial disputes",
      "International arbitration (foreign-element disputes)",
      "Annulment actions against arbitral awards",
    ],
  },
  "yabancilar-hukuku": {
    title: "Foreigners and Citizenship Law",
    bullets: [
      "Residence permit applications and extensions",
      "Work permit process",
      "Turkish citizenship by investment",
      "Appeals against deportation decisions",
    ],
  },
};

export const practiceAreasEn: Record<string, PracticeAreaTranslation> = {
  "ceza-hukuku": {
    title: "Criminal Law",
    metaTitle: "Criminal Law",
    metaDescription:
      "Defence representation during investigation and prosecution, pre-trial detention appeals, and support during statements and interrogation in Istanbul.",
    intro:
      "Criminal law governs individuals' rights, obligations and the trial process in the face of acts the state defines as crimes. In Turkey, criminal proceedings are conducted under Code No. 5271 on Criminal Procedure (CMK). Legal support can be obtained at every stage, from the investigation phase through to a finalised conviction.",
    sections: [
      {
        heading: "How Does a Criminal Case Proceed?",
        paragraphs: [
          "Criminal proceedings consist of two main stages: investigation and prosecution. The investigation stage is conducted by the public prosecutor's office, triggered by a criminal complaint or an ex officio inquiry. During this stage, a suspect may be questioned, and decisions on detention or pre-trial detention may arise.",
          "The prosecution stage begins once the prosecutor's office prepares and submits an indictment to the court. Once the court accepts the indictment, the case is formally opened and the accused acquires defendant status. Hearings are held, evidence is examined and the process moves toward a verdict.",
        ],
      },
      {
        heading: "The Suspect's Rights During Investigation",
        paragraphs: [
          "Under Article 147 of the CMK, a suspect has the right to remain silent, the right to choose defence counsel or benefit from an appointed one, and the right to be informed of the charges against them. Failure to afford any of these rights constitutes a procedural violation.",
          "The standard detention period is 24 hours, though it may be extended up to 4 days by prosecutorial decision in cases of collective offences. Where a person is not released despite the expiry of the detention period, an application may be made to the criminal judgeship of peace.",
        ],
        items: [
          "Right to silence: a suspect cannot be compelled to make a self-incriminating statement.",
          "Right to counsel: the right to consult a lawyer before giving a statement may be exercised.",
          "Right to be informed: the offence a person is accused of must be clearly stated.",
          "Right to notify relatives: a detained person may have a relative of their choosing informed.",
        ],
      },
      {
        heading: "Pre-Trial Detention and Judicial Control",
        paragraphs: [
          "Pre-trial detention is ordered by the criminal judgeship of peace where there is strong suspicion of a crime and one of the statutory grounds for detention exists. Under Article 100 of the CMK, detention may be justified by a risk that the suspect will flee, tamper with evidence, or repeat the offence.",
          "Judicial control is a set of alternative measures to detention, which may include obligations such as not leaving a specified place, reporting periodically, or surrendering one's passport. Detention orders may be appealed; the appeal is made to the criminal judgeship of peace.",
        ],
      },
      {
        heading: "The Prosecution Stage and Hearing Process",
        paragraphs: [
          "In the prosecution stage, which begins once the indictment is accepted, the accused has the right to confront the accusation and mount a defence. At hearings, the prosecution and the defence present their evidence; witnesses are heard and expert reports are evaluated.",
          "After the verdict is announced, an appeal may be lodged with the regional court of appeal, followed by cassation before the Court of Cassation. Extraordinary legal remedies may also be available against finalised decisions.",
        ],
      },
    ],
    faq: [
      {
        question: "When can I reach a lawyer once I am taken into custody?",
        answer:
          "Under Article 154 of the CMK, a person taken into custody has the right to consult with defence counsel from the moment custody begins. The prosecutor's office or law enforcement may not restrict the exercise of this right. Requesting to speak with your lawyer before your statement begins is your right.",
      },
      {
        question: "Is retaining defence counsel mandatory?",
        answer:
          "Defence counsel is mandatory for offences carrying a minimum sentence of 5 years' imprisonment or more, as well as for children and persons with disabilities. In other cases, appointing counsel is optional; where a person lacks the financial means, a free defence lawyer may be requested from the bar association.",
      },
      {
        question: "Am I obliged to give a statement as a suspect?",
        answer:
          "No. The right to silence is guaranteed by Article 38 of the Constitution and Article 147 of the CMK. A suspect cannot be compelled to make a self-incriminating statement; declining to give a statement is an exercise of the right to silence and cannot be treated as evidence against them.",
      },
      {
        question: "How long can pre-trial detention last?",
        answer:
          "For offences within the jurisdiction of heavy penal courts, detention during the investigation stage may last up to 6 months, which can be extended. The total detention period during the prosecution stage ranges between 2 and 7 years depending on the nature of the offence.",
      },
      {
        question: "Can I claim compensation once an acquittal becomes final?",
        answer:
          "Yes. Under Article 141 of the CMK, compensation may be claimed from the state for damages suffered due to unjust custody or detention. The claim must be filed within 3 months of the decision, and in any event within 1 year.",
      },
    ],
  },

  "is-hukuku": {
    title: "Labour Law",
    metaTitle: "Labour Law",
    metaDescription:
      "Legal support in Istanbul for unjust dismissal, severance and notice pay, reinstatement claims, overtime and employee rights.",
    intro:
      "Labour law governs the relationship between employee and employer, covering every stage from the formation of the employment contract to its termination. In Turkey, the principal source is Labour Code No. 4857. Trade Unions and Collective Labour Agreements Code No. 6356, Social Insurance Code No. 5510, and the general provisions of the Code of Obligations also apply.",
    sections: [
      {
        heading: "Types of Termination of the Employment Contract",
        paragraphs: [
          "An employment contract may be terminated by either the employee or the employer, either for just cause or with notice. Termination for just cause is regulated in Articles 24 and 25 of the Labour Code. Termination by the employer must be based on a valid reason; where the termination is invalid, a reinstatement claim may be filed.",
          "Termination with notice requires observing the statutory notice periods before ending the contract. Failure to observe the notice period requires payment of notice pay. Depending on the employee's seniority, the notice period ranges from 2 to 8 weeks.",
        ],
      },
      {
        heading: "Severance Pay: Conditions for Entitlement",
        paragraphs: [
          "The right to severance pay arises where an employee who has worked for at least 1 year has their employment contract terminated under specific conditions. These conditions include: termination by the employer without a valid reason, resignation by the employee for just cause, retirement, and leaving employment due to military service or marriage.",
          "Severance pay is calculated on the basis of 30 days' gross wages for each full year of service. In addition to wages, the calculation also takes into account regularly paid items such as bonuses, heating allowances, and meal and transport allowances.",
        ],
      },
      {
        heading: "Reinstatement Claims",
        paragraphs: [
          "An employee working at a workplace employing 30 or more employees, with at least 6 months of service and under an indefinite-term employment contract, falls within job security protection. If such an employee's contract is terminated without a valid reason being shown, a reinstatement claim may be filed.",
          "A reinstatement claim begins with an application to mediation within 1 month of notification of the termination; if no agreement is reached in mediation, an application must be made to the labour court within 2 weeks. If the court orders reinstatement, the employer must reinstate the employee within 1 month.",
        ],
      },
      {
        heading: "Overtime and Other Employee Claims",
        paragraphs: [
          "Work exceeding 45 hours per week is considered overtime and must be paid at a fifty percent premium. Employees also have statutory rights to annual leave pay, weekly rest pay, and public holiday pay. Where such claims go unpaid, a case may be filed with the labour court.",
          "The general statute of limitations for employee claims is 5 years; the same 5-year period applies to severance and notice pay claims. It is advisable to file a claim or apply to mediation before the limitation period expires.",
        ],
      },
    ],
    faq: [
      {
        question: "My employment was unjustly terminated — what can I do?",
        answer:
          "If you fall within job security protection, you must apply to mediation within 1 month of notification of the termination. If no agreement is reached in mediation, a reinstatement claim may be filed with the labour court within 2 weeks. If you fall outside job security protection, you may claim severance and notice pay.",
      },
      {
        question: "Am I entitled to severance pay?",
        answer:
          "To be entitled to severance pay, you must have worked at the same workplace for at least 1 year and your employment contract must have ended for specific reasons. Invalid termination by the employer, retirement, resignation for just cause, and military service are among these reasons. Proving that a resignation was based on just cause is important.",
      },
      {
        question: "If my employer has me sign a release, do I lose my rights?",
        answer:
          "No, a signature alone does not make a release valid. For a release to be valid, it must be executed at least 1 month after termination, be supported by proof of payment, and clearly specify a particular claim item. Releases signed under duress or without payment having been made may be held invalid by the labour court.",
      },
      {
        question: "If a reinstatement order is issued, must the employer reinstate the employee?",
        answer:
          "Yes. Once the court orders reinstatement, the employer must reinstate the employee within 1 month of the decision becoming final. If reinstatement does not occur, reinstatement compensation of 4 to 8 months' gross wages is payable; additionally, wages for the period of unemployment — up to a maximum of 4 months until the decision becomes final — are also payable.",
      },
      {
        question: "How can I prove my overtime claim?",
        answer:
          "An overtime claim can be proven through payroll records, work schedules, workplace entry-exit records, and witness testimony. Where the employer fails to keep or produce records, the court may base its calculation on the employee's statement. Strong documentation, however, plays a decisive role in how the case unfolds.",
      },
    ],
  },

  "gayrimenkul-hukuku": {
    title: "Real Estate Law",
    metaTitle: "Real Estate Law",
    metaDescription:
      "Legal support in Istanbul for tenancy disputes, tenant eviction, title deed annulment and registration cases, and condominium ownership disputes.",
    intro:
      "Real estate law covers matters such as immovable property ownership, tenancy relations, and construction law. In Turkey, the principal sources are Civil Code No. 4721, Code of Obligations No. 6098, and Condominium Ownership Code No. 634. Articles 299 to 378 of the Code of Obligations, on tenancy, also apply to lease agreements.",
    sections: [
      {
        heading: "The Lease Agreement and the Parties' Obligations",
        paragraphs: [
          "A lease agreement involves the landlord surrendering the use of an immovable property to the tenant, in exchange for the tenant paying rent. The agreement may be made in writing or verbally, though a written form is recommended for ease of proof. The special provisions of the Code of Obligations apply to residential and roofed workplace leases.",
          "The tenant's obligations include paying rent on time, using the property with due care, and returning it upon expiry of the lease term. The landlord's obligations are to deliver the property fit for use and to maintain it in that condition.",
        ],
      },
      {
        heading: "How Does Tenant Eviction Take Place?",
        paragraphs: [
          "The expiry of a lease agreement does not mean the tenant vacates the property automatically. In residential leases, the agreement may only be terminated by the landlord on grounds listed in the Code of Obligations. These grounds are: non-payment of rent, use contrary to the agreement, eviction due to need, and expiry of the 10-year extension period.",
          "An eviction case filed by the landlord is heard before the civil court of peace. For an eviction case based on 2 justified warnings within a lease term, the warnings must have been duly issued. Enforcement of an eviction order takes place through the enforcement office.",
        ],
        items: [
          "Eviction for non-payment: a warning notice giving the tenant a 30-day payment period must be sent.",
          "Eviction due to need: filed on the ground of a housing need of the landlord or a first-degree relative.",
          "Reconstruction or redevelopment: applicable where the building requires substantial repair.",
          "10-year extension: once the lease has been renewed 10 times, the landlord may seek eviction with at least 3 months' prior notice.",
        ],
      },
      {
        heading: "Title Deed Annulment and Registration Cases",
        paragraphs: [
          "A title deed annulment and registration case is filed to annul a title deed transaction carried out erroneously, fraudulently, or unlawfully, and to register the property in the name of the rightful owner. Such cases are heard before the civil court of first instance.",
          "Circumstances that may lead to annulment of a title deed include a forged power of attorney, a sham transaction, lack of legal capacity, testator's collusion (a transaction by the deceased aimed at prejudicing heirs), and mistake. As the time limit for filing varies by the type of violation, it is advisable to apply without delay.",
        ],
      },
      {
        heading: "Condominium Ownership and Common Area Disputes",
        paragraphs: [
          "Condominium Ownership Code No. 634 governs the rights and obligations of unit owners in buildings such as apartments and residential sites made up of independent sections. Use of common areas, maintenance fee debts, the management plan, and meeting resolutions are resolved within the framework of this code.",
          "Where a unit owner fails to fulfil their obligations, other unit owners may file a case with the civil court of peace. Enforcement proceedings may also be initiated for maintenance fee debts. Objections to management board resolutions must be made within 3 months of the date of the resolution.",
        ],
      },
    ],
    faq: [
      {
        question: "What should I do if my tenant is not paying rent?",
        answer:
          "A warning notice giving the tenant a 30-day payment period should be sent through a notary or by registered mail with return receipt. If payment is not made within this period, an eviction case may be filed with the civil court of peace. If this route has been used twice within one lease term, an eviction case based on 2 justified warnings may be pursued.",
      },
      {
        question: "How long does evicting my tenant take?",
        answer:
          "The duration varies depending on the grounds, court workload, and any appeal stages. Cases filed for non-payment typically take 3 to 6 months on average. Once the eviction order becomes final, enforcement proceedings begin and the tenant is given a 15-day eviction period.",
      },
      {
        question: "What is the legal cap on rent increases?",
        answer:
          "Under the Code of Obligations, the annual increase rate for residential leases may not exceed the consumer price index (CPI) rate announced for the preceding lease year. Even where the parties have agreed to a higher increase, the statutory cap applies. Increase requests above the statutory limit have no legal effect.",
      },
      {
        question: "I paid for a property without a title deed — how can I obtain one?",
        answer:
          "Sale agreements executed without a title deed transfer may qualify as a 'promise to sell' agreement. If this agreement is notarised, a title registration case may be filed. Where the deed is not transferred, it is possible either to seek performance of the agreement through the courts or to file a case for the return of the amount paid.",
      },
      {
        question: "What is testator's collusion?",
        answer:
          "Testator's collusion occurs where a deceased person, in order to sideline their heirs, transfers their property to a third party while disguising the transaction as, for example, a gift or a sale at far below the property's real value. In such cases, heirs may file a title deed annulment and registration case seeking annulment of the transaction that prejudiced them.",
      },
    ],
  },

  "miras-hukuku": {
    title: "Inheritance Law",
    metaTitle: "Inheritance Law",
    metaDescription:
      "Legal support in Istanbul for estate distribution, reserved share and abatement claims, drafting wills, and renunciation of inheritance.",
    intro:
      "Inheritance law governs the transfer of a deceased person's assets, rights and debts to their heirs, and the conditions of that transfer. In Turkey, the principal source is the inheritance section of Civil Code No. 4721 (TMK Articles 495–682). Certificates of inheritance, wills, abatement, and estate division are among the main topics in this field.",
    sections: [
      {
        heading: "Heirs and Inheritance Shares",
        paragraphs: [
          "Under Turkish law, heirs fall into two groups: statutory heirs and appointed heirs. Statutory heirs are those entitled to inherit by operation of law. The first class consists of descendants (children and grandchildren), the second class of parents and their descendants, and the third class of grandparents.",
          "The surviving spouse inherits alongside heirs of every class, though the share varies by class. Together with the first class, the surviving spouse receives one quarter of the estate; with the second class, one half; and with the third class, three quarters.",
        ],
      },
      {
        heading: "What Is a Reserved Share, and How Is an Abatement Case Filed?",
        paragraphs: [
          "A reserved share is the portion of the inheritance guaranteed by law to certain heirs, limiting the testator's freedom of disposition. Under Article 505 of the TMK, the reserved share of descendants is half of their statutory share, that of parents is one quarter, and that of the surviving spouse is, depending on the circumstances, the entirety of their statutory share.",
          "Where the testator has made dispositions exceeding the reserved share, the reserved-share heirs may file an abatement case. An abatement case — where the reserved share has been violated through a will or inter vivos gifts — must be filed within 1 year of the testator's death. If the violation is not discovered when the estate opens, this period begins to run from the date it is discovered.",
        ],
      },
      {
        heading: "Types of Wills and Conditions of Validity",
        paragraphs: [
          "Under Turkish law, a will may be drawn up in three forms: an official will, a holographic (handwritten) will, and an oral will. An official will is made before a notary and two witnesses. A holographic will must be entirely handwritten, dated and signed by the testator personally, from beginning to end.",
          "Any formal deficiency in a holographic will (such as the date not being written, or the use of a typewriter) may render it invalid. For a will to be considered valid, the testator must also have had capacity of discernment at the time it was drawn up.",
        ],
      },
      {
        heading: "Renunciation of Inheritance",
        paragraphs: [
          "An heir is not obliged to accept an estate that is overburdened with debt. The right to renounce inheritance is regulated in Article 605 of the TMK. Renunciation may be made within 3 months of the testator's death, either by written declaration to the civil court of peace or through the civil registry office.",
          "An heir who lets this period lapse is deemed to have accepted the inheritance. An heir who exercises the right of active renunciation is not personally liable for the testator's debts. An heir who accepted the inheritance without being aware of a debt's existence may request an extension from the judge even if the 3-month period has passed.",
        ],
      },
    ],
    faq: [
      {
        question: "I want to renounce an inheritance — how can I do this?",
        answer:
          "An application must be made to the civil court of peace within 3 months of the testator's death, declaring renunciation. The declaration may also be made verbally; the court records it in the minutes. The 3-month period may be extended for justified reasons, but it is advisable not to delay the application in order to avoid missing the deadline.",
      },
      {
        question: "My reserved share has been violated — what can I do?",
        answer:
          "You must file an abatement case within 1 year of the date you learned that your reserved share was violated. The case is filed with the civil court of first instance in the place where the estate opened. Before filing an abatement case, it is important to calculate the reserved share and determine which dispositions are subject to abatement.",
      },
      {
        question: "Can I object if a will reduces the share left to me?",
        answer:
          "If you are a reserved-share heir, you may file an abatement case against the will. If you are not a reserved-share heir, you may examine whether the will meets the conditions of validity and pursue an annulment case instead. Grounds for annulling a will may include the testator's lack of capacity, deception, duress, or formal deficiency.",
      },
      {
        question: "How is a certificate of inheritance obtained?",
        answer:
          "A certificate of inheritance (heirship document) is obtained by applying to the civil court of peace. The application includes a population registry record and, if available, witness statements. The court issues a document showing the heirs and their shares. Notaries may also be approached for this purpose.",
      },
      {
        question: "What is an estate division agreement?",
        answer:
          "An estate division agreement determines how multiple heirs will divide the testator's assets among themselves. It must be made in writing; where it covers immovable property, an official form (notarisation) is required. If one of the heirs does not wish to participate in the division, a partition (termination of co-ownership) case may be filed.",
      },
    ],
  },

  "borclar-hukuku": {
    title: "Law of Obligations",
    metaTitle: "Law of Obligations",
    metaDescription:
      "Legal support in Istanbul for contractual disputes, claims and damages cases, and enforcement proceedings.",
    intro:
      "The law of obligations governs debt relationships between persons, the formation and termination of contracts, liability for damages, and claim relationships. In Turkey, the principal source is Code of Obligations No. 6098 (TBK), which is composed of three main parts: general provisions, obligations arising from contracts, and non-contractual liability.",
    sections: [
      {
        heading: "Freedom of Contract and Fundamental Principles",
        paragraphs: [
          "Turkish law recognises the principle of freedom of contract. Parties may enter into contracts of whatever content they wish, provided this does not contravene mandatory statutory provisions, morality, public order, or personal rights. A contract is formed once an offer and its acceptance align.",
          "Certain types of contracts require a specific form. The sale of immovable property requires an official deed, while a lease agreement, although not required to be in writing, is recommended to be so for ease of proof. Contracts lacking the required form are deemed void.",
        ],
      },
      {
        heading: "Breach of Contract and Damages",
        paragraphs: [
          "Where a party fails to perform their contractual obligation properly or on time, debtor default or breach of contract arises. In this case, the creditor may demand performance of the obligation as agreed, compensation for delay, or may terminate the contract and claim negative damages.",
          "As for non-contractual liability (tort), the person causing harm may be held liable for damages provided fault exists, damage has occurred, and an appropriate causal link is established between the act and the damage. The statute of limitations for tort damages claims is 2 years from when the injured party learns of the damage and the liable person, and in any event 10 years from the date the tort was committed.",
        ],
      },
      {
        heading: "Debt Recovery and Enforcement Proceedings",
        paragraphs: [
          "There are two routes for collecting a debt: litigation or enforcement proceedings. In enforcement proceedings, the creditor may apply to the enforcement office to have a payment order sent to the debtor. If the debtor does not object to the payment order within 7 days, the proceedings become final.",
          "If the debtor objects, the creditor must either file a case to annul the objection before the enforcement court, or pursue a debt claim before the civil court of first instance. The general statute of limitations for debt claims is 10 years, though periodic claims such as commercial sales and rent are subject to a special 5-year limitation period.",
        ],
      },
      {
        heading: "Unjust Enrichment",
        paragraphs: [
          "Unjust enrichment refers to the obligation of a person who has become enriched, without a valid legal cause, to the detriment of another's assets, to return that enrichment. The provisions on unjust enrichment also apply where the legal cause ceases to exist or the expected outcome does not materialise.",
          "The statute of limitations for unjust enrichment claims is 2 years from when the enrichment is discovered, and in any event 10 years from the date the enrichment occurred. It is advisable to file a case or apply to mediation before these periods expire.",
        ],
      },
    ],
    faq: [
      {
        question: "How can I collect my debt?",
        answer:
          "As a first step, a warning notice may be sent to the debtor through a notary. If payment is not made, enforcement proceedings may be initiated or a debt case may be filed. For claims based on documentary evidence, enforcement proceedings without a court judgment offer a fast route; if no objection is raised, the proceedings become final after 7 days.",
      },
      {
        question: "Can I withdraw from a contract?",
        answer:
          "The right to withdraw from a contract depends on whether the parties have reserved a right of withdrawal, on the statutory withdrawal periods granted in consumer contracts, or on whether the contract was formed due to material mistake, fraud, or duress. Where the conditions for withdrawal or rescission are not met, terminating the contract may give rise to liability for damages.",
      },
      {
        question: "Can I file a case for non-pecuniary damages?",
        answer:
          "Non-pecuniary damages may be claimed where personal rights have been unlawfully violated. Physical harm, damage to honour and reputation, and severe emotional distress may all form the basis for such a claim. The court determines the amount of non-pecuniary damages based on the principle of equity.",
      },
      {
        question: "What purpose does a warning notice serve?",
        answer:
          "A warning notice is a formal written notification inviting the debtor to perform their obligation. In most cases, a warning notice is required for the debtor to be considered in default. Interest begins to accrue from the date of default, and the scope of compensation expands. A warning notice also interrupts the statute of limitations.",
      },
      {
        question: "When does the statute of limitations expire for debt claims?",
        answer:
          "The general limitation period is 10 years. However, a 5-year period applies to periodic obligations such as rent, interest, and alimony, while claims arising from tort are subject to a 2-year period from when the damage and the liable person are discovered, and in any event a 10-year period from the date the tort was committed.",
      },
    ],
  },

  "aile-hukuku": {
    title: "Family Law",
    metaTitle: "Family Law",
    metaDescription:
      "Legal support in Istanbul for divorce proceedings, child custody, alimony, division of marital property, and family law matters.",
    intro:
      "Family law governs family relations such as marriage, divorce, custody, alimony and matrimonial property regimes. In Turkey, the principal source is the family law section of Civil Code No. 4721 (TMK Articles 118–494). As cases before family courts directly affect people's private lives, it is important that the process is handled with care.",
    sections: [
      {
        heading: "Types of Divorce: Uncontested and Contested",
        paragraphs: [
          "Under Turkish law, divorce may take place in two main forms: uncontested divorce and contested divorce. For an uncontested divorce (TMK Art. 166/3), the marriage must have lasted at least 1 year, and the parties must jointly sign a protocol covering the divorce, custody, alimony and division of property.",
          "A contested divorce is filed where one of the parties does not wish to divorce, or where the conditions of the divorce cannot be agreed upon. Grounds for divorce such as irretrievable breakdown of the marital union, adultery, attempted murder, mental illness, and desertion are regulated in Articles 161 to 166 of the TMK.",
        ],
      },
      {
        heading: "Custody and Personal Relations",
        paragraphs: [
          "Together with the divorce decision, the court awards custody of the joint children to one of the spouses, or exceptionally to both. In determining custody, the child's best interests are paramount; the child's age, health, and the parents' economic and social circumstances are all evaluated by the court.",
          "The relationship between the non-custodial parent and the child is maintained through a personal relations (visitation) arrangement. Where this personal relationship is violated, a custody modification case may be filed. Custody arrangements may always be revisited where circumstances change or the child's best interests so require.",
        ],
      },
      {
        heading: "Types of Alimony",
        paragraphs: [
          "Alimony is a periodic payment determined by court order to support the livelihood of one of the spouses or a child. Turkish law recognises four types of alimony: interim alimony (during the case), poverty alimony (for a spouse after divorce), child support alimony, and assistance alimony.",
          "For poverty alimony to be awarded, the requesting spouse must be shown to face poverty as a result of the divorce. The amount of alimony is determined taking into account the parties' economic circumstances and living conditions. Where circumstances change, a case for increasing or reducing alimony may be filed.",
        ],
      },
      {
        heading: "Matrimonial Property Regime and Its Liquidation",
        paragraphs: [
          "The statutory matrimonial property regime for couples married after 1 January 2002 is the participation in acquired property regime. Under this regime, property acquired during the marriage (excluding personal property) is shared equally upon divorce. Personal property consists of assets acquired through inheritance or before the marriage, and assets intended for personal use.",
          "In the liquidation of the property regime, the parties first reclaim their personal property; the residual value (the value of acquired property after deducting debts) is then calculated and shared equally. This calculation takes into account values acquired during the marriage such as household items, bank accounts, and pension savings.",
        ],
      },
    ],
    faq: [
      {
        question: "How does an uncontested divorce take place?",
        answer:
          "Provided the marriage has lasted at least 1 year, the spouses prepare a protocol covering the divorce, custody, alimony and division of property. If both spouses are present at the hearing and declare that they accept the protocol, the court grants the divorce. Uncontested divorces are generally concluded in a single hearing.",
      },
      {
        question: "How long does a contested divorce take?",
        answer:
          "As a contested divorce involves gathering evidence, hearing witnesses, and social investigation, it may take on average 1 to 3 years. This period may extend further when appeal and cassation stages are taken into account. The court's workload and the complexity of the case play a determining role in the outcome.",
      },
      {
        question: "How can I obtain custody?",
        answer:
          "Custody is determined by the judge according to the child's best interests. Factors supporting an award of custody to you include a strong emotional bond with the child, stable and suitable living conditions, and the capacity to meet the child's educational and health needs. The family court may, where necessary, request expert examination and a social investigation report.",
      },
      {
        question: "When does alimony start and how long does it continue?",
        answer:
          "Interim alimony may be ordered for the duration of the case. Poverty alimony begins once the divorce decision becomes final. Alimony may be ordered indefinitely, or may be limited to a specific period. Alimony ends if the alimony recipient remarries, if either party dies, or if the recipient is no longer in a state of poverty.",
      },
      {
        question: "Who keeps the home in a divorce?",
        answer:
          "This is determined according to whose name the property is registered under and the liquidation of the matrimonial property regime between the parties. Where joint ownership exists, a liquidation case may be filed. Where either spouse — and particularly the children — has a housing need, the court may temporarily leave the use of the home to that spouse.",
      },
    ],
  },

  "vergi-hukuku": {
    title: "Tax Law",
    metaTitle: "Tax Law",
    metaDescription:
      "Legal support in Istanbul for tax audits, pre- and post-assessment settlement, and litigation against tax and penalty notices.",
    intro:
      "Tax law governs the procedure followed by the state in exercising its power of taxation, and taxpayers' rights within that process. In Turkey, the principal source is Tax Procedure Code No. 213 (VUK); while specific taxes (income, corporate, VAT, special consumption tax, etc.) are regulated by their own particular codes, the VUK provides the common procedural framework for assessment, notification, accrual, and collection, as well as tax penalties.",
    sections: [
      {
        heading: "The Tax Audit Process and Taxpayer Rights",
        paragraphs: [
          "A tax audit begins with the notification of an assignment letter to the taxpayer and the drawing up of a minutes commencing the audit. Article 140 of the VUK sets maximum periods depending on the type of audit: 1 year for a full audit (extendable by 6 months if necessary), 6 months for a limited audit (extendable by 6 months), and 3 months for a VAT refund audit (extendable by 2 months).",
          "Under the same article, the taxpayer has the right to have a lawyer or financial advisor present during the audit, to be informed of the scope and subject of the audit, to request that books and documents be requested in writing, and to request a reasonable additional period for justified reasons. The report drawn up at the end of the audit must be attached to the notice served on the taxpayer, pursuant to VUK Art. 35/12.",
        ],
      },
      {
        heading: "Time Limit for Litigation Against Tax and Penalty Notices",
        paragraphs: [
          "The Turkish tax system does not have an administrative 'objection' mechanism; recourse against a notice proceeds directly through litigation. Under VUK Art. 377–378 and Article 7 of the Administrative Procedure Code, an annulment case must be filed with the tax court within 30 days of notification of the notice; this period is preclusive.",
          "Instead of filing a case within the same 30-day period, a penalty reduction request or settlement application may be made under VUK Art. 376; however, only one of these avenues may be chosen. If the deadline is missed, the notice becomes final and the collection stage begins.",
        ],
      },
      {
        heading: "Pre-Assessment and Post-Assessment Settlement",
        paragraphs: [
          "Pre-assessment settlement is requested before the audit is completed, before the final minutes are signed; if this route is pursued and produces no result, or if the taxpayer does not participate, the right to post-assessment settlement cannot be exercised. Post-assessment settlement, on the other hand, is requested within 30 days of notification of the notice.",
          "Under the amendment introduced by Law No. 7524 (Official Gazette: 2 August 2024), the principal tax amount was removed from the scope of settlement; for applications filed after this date, settlement covers only tax loss, irregularity, and special irregularity penalties. If settlement is reached, the minutes is final and no case may be filed; if not reached, the time limit for filing a case continues from where it left off, and if the remaining period is less than 15 days, it is extended to 15 days.",
        ],
      },
      {
        heading: "Types of Tax Penalties",
        paragraphs: [
          "The tax loss penalty (VUK Art. 341, 344) is imposed where tax is not assessed on time or in full, and as a rule amounts to one times the tax lost; where the tax loss results from smuggling acts listed in VUK Art. 359 (such as issuing or using fraudulent documents), this rate rises to three times.",
          "Irregularity and special irregularity penalties (VUK Art. 351–353) are applied, without a tax loss being required, where formal obligations such as bookkeeping and documentation order, invoicing, or notification requirements are violated, and are generally imposed as fixed amounts updated each year by the revaluation rate.",
        ],
      },
    ],
    faq: [
      {
        question: "How long does a tax audit take?",
        answer:
          "Under VUK Art. 140, a full audit may take up to 1 year (extendable by 6 months if necessary), a limited audit up to 6 months, and a VAT refund audit up to 3 months. These periods are statutory maximums; audits are generally completed sooner.",
      },
      {
        question: "Do I lose my right to litigate if I go for settlement?",
        answer:
          "Yes, if settlement is reached; the amount determined by the minutes becomes final and no case may be filed for that item. If settlement is not reached, your right to litigate is preserved; if the remaining time is less than 15 days, it is extended to 15 days.",
      },
      {
        question: "How many days do I have to challenge a tax/penalty notice?",
        answer:
          "Technically, this is not an 'objection' but litigation: an annulment case must be filed with the tax court within 30 days of notification of the notice. This period is preclusive; if missed, the notice becomes final.",
      },
      {
        question: "Should I pursue pre-assessment or post-assessment settlement?",
        answer:
          "Pre-assessment settlement is requested before the audit concludes, and if it produces no result, the right to post-assessment settlement is lost; post-assessment settlement is requested within the 30 days following notification of the notice. Which is appropriate for your file should be assessed according to the stage of the audit.",
      },
      {
        question: "What is the difference between a tax loss penalty and an irregularity penalty?",
        answer:
          "The tax loss penalty is imposed in proportion to the tax lost (as a rule, one times; three times for smuggling acts). Irregularity and special irregularity penalties, on the other hand, are applied without a tax loss being required, for violations of formal obligations such as bookkeeping and notification, generally as fixed amounts.",
      },
    ],
  },

  "icra-iflas-hukuku": {
    title: "Enforcement and Bankruptcy Law",
    metaTitle: "Enforcement and Bankruptcy Law",
    metaDescription:
      "Legal support in Istanbul for enforcement proceedings with or without a court judgment, objections to payment orders, seizure procedures and concordat.",
    intro:
      "Enforcement and bankruptcy law governs the compulsory collection of a creditor's claim through the power of the state, and the liquidation of a merchant debtor. In Turkey, the principal source is Enforcement and Bankruptcy Code No. 2004 (İİK). Depending on the nature of the claim, proceedings with or without a court judgment, the debtor's right to object, and the seizure process all operate within the framework of this code.",
    sections: [
      {
        heading: "The Difference Between Proceedings With and Without a Judgment",
        paragraphs: [
          "Enforcement proceedings without a judgment are initiated directly at the enforcement office for monetary or collateral claims, without any court decision being required; a payment order is then sent to the debtor. Proceedings with a judgment are based on a court judgment or a document having the effect of a judgment, and an enforcement order is sent to the debtor.",
          "The most critical difference between the two routes lies in the effect of an objection: in proceedings without a judgment, a timely objection by the debtor automatically halts the proceedings; in proceedings with a judgment, an objection does not halt the proceedings, and the debtor must separately request a stay of enforcement.",
        ],
      },
      {
        heading: "Objecting to a Payment Order and What Follows",
        paragraphs: [
          "The debtor may object to the enforcement office within 7 days of notification of the payment order (İİK Art. 62); this period is preclusive and the objection automatically halts the proceedings. For the creditor to continue the proceedings, the objection must be removed.",
          "There are two different routes for this: a case to annul the objection is filed before the general court (civil or commercial court of first instance), with a filing period of 1 year from notification of the objection to the creditor (İİK Art. 67), and involves full litigation. Removal of the objection, on the other hand, is requested before the enforcement court based on evidence already in hand, has a filing period of 6 months (İİK Art. 68–68/a), and is generally concluded faster.",
        ],
      },
      {
        heading: "The Seizure Process and Exempt Assets",
        paragraphs: [
          "Once the proceedings become final, the creditor may request seizure; the enforcement officer attaches the debtor's movable and immovable property, as well as rights and claims held by third parties. For wage and salary seizure, İİK Art. 83 applies: the amount necessary for the minimum subsistence of the debtor and their family is set aside first, and no more than one quarter of the remainder may be seized.",
          "Alimony claims fall outside this limitation and take priority. Under İİK Art. 82, certain assets and rights are exempt from seizure regardless of the type of debt:",
        ],
        items: [
          "Tools and equipment necessary for the debtor's profession or trade",
          "Household items necessary for domestic needs, excluding valuables",
          "The single dwelling suited to the needs of the debtor and their family",
          "At most one quarter of wages/salary; alimony claims fall outside this limit",
        ],
      },
      {
        heading: "Bankruptcy Proceedings and Concordat",
        paragraphs: [
          "Bankruptcy proceedings may only be applied to debtors qualifying as merchants under the Turkish Commercial Code, or those subject to bankruptcy under a special law; they may only be pursued for monetary or collateral claims.",
          "Concordat (İİK Art. 285 et seq.) is a restructuring mechanism enabling a debtor who is unable to pay their debts, or at risk of being unable to do so, to reach an agreement with creditors under court supervision; a state of over-indebtedness is not required. The court may first grant a temporary moratorium (up to 5 months), followed, if conditions are met, by a definitive moratorium (up to 18 months); no new proceedings may be initiated against the debtor during this period.",
        ],
      },
    ],
    faq: [
      {
        question: "What happens if I don't object to enforcement proceedings?",
        answer:
          "If you neither object within 7 days of notification of the payment order nor make payment, the proceedings become final; the creditor may request seizure directly and you will be asked to declare your assets.",
      },
      {
        question: "How much of my salary can be seized?",
        answer:
          "Under İİK Art. 83, the amount necessary for your and your family's minimum subsistence is set aside first; no more than one quarter of the remainder may be seized. Alimony claims fall outside this limitation and take priority.",
      },
      {
        question: "How does enforcement based on a negotiable instrument (cheque/promissory note) differ from ordinary proceedings?",
        answer:
          "In proceedings specific to negotiable instruments, the objection period is 5 days rather than 7, and the objection is made to the enforcement court rather than the enforcement office; the grounds for objection are also limited in number. The debtor is granted 10 days to pay.",
      },
      {
        question: "Which is faster: annulling an objection or having it removed?",
        answer:
          "Removal of an objection, since it is requested before the enforcement court based on evidence already in hand, is generally concluded faster than annulling an objection (which is filed before a general court and involves full litigation).",
      },
      {
        question: "Can my home be seized?",
        answer:
          "Under İİK Art. 82, the single dwelling suited to the needs of the debtor and their family cannot be seized, provided the debt did not arise from that home itself. However, valuables within the home (cash, gold, etc.) fall outside this protection.",
      },
    ],
  },

  "idare-hukuku": {
    title: "Administrative Law",
    metaTitle: "Administrative Law",
    metaDescription:
      "Legal support in Istanbul for annulment of administrative acts, full remedy actions, stay of execution, and appeals against disciplinary penalties.",
    intro:
      "Administrative law governs judicial review of the acts and actions of public administrations, and the rights of those harmed by such acts. In Turkey, administrative jurisdiction is based, in terms of its organisation, on Council of State Code No. 2575 and Code No. 2576 on the Establishment of Regional Administrative Courts, Administrative Courts and Tax Courts, and, in terms of procedure, on Administrative Procedure Code No. 2577 (İYUK).",
    sections: [
      {
        heading: "Elements of an Administrative Act and Annulment Actions",
        paragraphs: [
          "For an administrative act to be considered lawful, it must bear five elements: competence, form, cause, subject, and purpose. A defect in any of these elements constitutes a ground of unlawfulness requiring annulment of the act.",
          "An annulment action may be filed against final and enforceable (executory) acts of the administration; preparatory acts and acts of an advisory nature cannot be challenged. Unless a separate period is provided under special legislation, the time limit for filing under İYUK Art. 7 is 60 days before the Council of State and administrative courts, and 30 days before tax courts.",
        ],
      },
      {
        heading: "Full Remedy Action: Its Difference from Annulment",
        paragraphs: [
          "While it is sufficient, for an annulment action, that the act infringes your interest, a full remedy action requires that a concrete violation of a right and the existence of damage be demonstrated. A full remedy action may be filed on the basis of the administration's fault in service (never, belatedly, or improperly providing a service) or on the basis of strict liability.",
          "Under İYUK Art. 12, those who suffer damage due to an administrative act may file a full remedy action directly, may file a full remedy action together with an annulment action, or may first file an annulment action and, once that decision becomes final, separately file a full remedy action.",
        ],
      },
      {
        heading: "Stay of Execution",
        paragraphs: [
          "Under İYUK Art. 27, for a stay of execution to be ordered, two conditions must be met together: the act must be clearly unlawful, and its implementation must be likely to cause damage that would be difficult or impossible to remedy. This measure temporarily prevents the act from taking effect until the case is concluded.",
          "The court issues its reasoned decision after receiving the administration's defence or after the defence period has elapsed. A decision rejecting a request for a stay of execution may be appealed to the regional administrative court within 7 days of notification.",
        ],
      },
      {
        heading: "Remedies Against Disciplinary Penalties for Public Officials",
        paragraphs: [
          "Article 125 of Civil Servants Code No. 657 provides for five disciplinary penalties: warning, reprimand, salary deduction, suspension of step advancement, and dismissal from civil service. Penalties other than warning and reprimand are imposed after obtaining the opinion of disciplinary boards.",
          "Administrative objection is available against disciplinary penalties other than dismissal from civil service; for those not satisfied with the outcome of the objection, the general 60-day filing period under İYUK Art. 7 remains available in every case for filing a case before the administrative court.",
        ],
      },
    ],
    faq: [
      {
        question: "I missed the time limit for filing against an administrative act — what can I do?",
        answer:
          "As a rule, there is no possibility of restoration once the period has elapsed in administrative litigation; once the period expires, the right to litigate is lost. In exceptional cases, such as where notification was not made properly, an assessment may be made, but this is not a guaranteed route — the essential point is not to miss the deadline.",
      },
      {
        question: "What is the purpose of a stay-of-execution order?",
        answer:
          "It temporarily halts the implementation of the administrative act while the case is ongoing, preventing irreparable damage from occurring before the case concludes. Both the requirement that the act be clearly unlawful and that there be a serious risk of damage must be satisfied together.",
      },
      {
        question: "Should I file an annulment action or a full remedy action?",
        answer:
          "If you wish to have the act set aside, you should file an annulment action; if you wish to be compensated for damage suffered due to the act or action, you should file a full remedy action. Both may also be filed together.",
      },
      {
        question: "Should I apply to the administration first before challenging a disciplinary penalty?",
        answer:
          "For disciplinary penalties other than dismissal from civil service, administrative objection is available; however, it is also possible to file a case directly with the administrative court without this being a precondition. Which route is more suitable for your file should be assessed on the specific circumstances.",
      },
      {
        question: "Can I file a case directly with the Council of State?",
        answer:
          "No, as a rule the court of first instance is the administrative or tax court. The Council of State acts as a court of first instance only for the limited types of acts listed in the law; in other cases it serves as the appellate and cassation authority.",
      },
    ],
  },

  "tazminat-hukuku": {
    title: "Compensation Law",
    metaTitle: "Compensation Law",
    metaDescription:
      "Legal support in Istanbul for pecuniary and non-pecuniary damages claims arising from tort, traffic accident and workplace accident compensation.",
    intro:
      "Compensation law governs the remedying of damage caused to another by a person's fault-based and unlawful act. In Turkey, the principal source is Articles 49 to 76 of Code of Obligations No. 6098 (TBK), devoted to obligations arising from tort. Many disputes — traffic accidents, workplace accidents, medical malpractice, and violations of personal rights — are resolved within this general framework.",
    sections: [
      {
        heading: "Conditions of Tort Liability",
        paragraphs: [
          "Under TBK Art. 49, for liability to arise, four conditions must be met together: an unlawful act, fault (intent or negligence), the existence of damage, and an appropriate causal link between the act and the damage. Under the second paragraph of the same article, even absent an explicit prohibitive rule, intentionally causing damage through an act contrary to morality also gives rise to liability.",
          "Pecuniary damages aim to compensate for measurable and documentable economic loss, while non-pecuniary damages aim to somewhat ease the grief and suffering endured by the injured party, constituting a form of satisfaction rather than a means of enrichment.",
        ],
      },
      {
        heading: "Heads of Pecuniary Damages",
        paragraphs: [
          "In the event of death, TBK Art. 53 applies: funeral expenses, treatment expenses if death did not occur immediately, and loss of earning capacity, as well as the loss suffered by relatives deprived of the deceased's support (loss-of-support compensation), may be claimed.",
          "In the event of bodily harm (injury), TBK Art. 54 applies: treatment expenses, loss of earnings, loss arising from the reduction or loss of working capacity, and loss arising from the impairment of economic prospects may be claimed. For items such as loss of support and loss of working capacity, the amount is generally calculated by an expert/actuary based on the national life table under Court of Cassation practice; the exact amount can therefore only be determined through a case-specific expert examination.",
        ],
      },
      {
        heading: "How Is Non-Pecuniary Compensation Determined?",
        paragraphs: [
          "TBK Art. 56 specifically regulates non-pecuniary compensation for cases of impairment of bodily integrity and death; in cases of severe bodily harm or death, non-pecuniary compensation may also be awarded to relatives. The law does not set a fixed amount for non-pecuniary compensation.",
          "In determining the amount of non-pecuniary compensation, the judge takes into account the severity of the event, the parties' degree of fault, and their social and economic circumstances, and decides on an amount consistent with equity. The aim is not to enrich the injured party, but to somewhat balance the emotional suffering they experienced.",
        ],
      },
      {
        heading: "Statute of Limitations",
        paragraphs: [
          "Under TBK Art. 72, compensation claims arising from tort become time-barred within 2 years from the date the injured party learns of the damage and the liable person, and in any event within 10 years from the date the tort was committed; whichever of these two periods expires first, the right to claim ends on that date.",
          "If the act also constitutes a criminal offence and the limitation period under the criminal code is longer, that longer period also applies to the compensation claim under TBK Art. 72/2. In traffic accident compensation, the special provisions of Highway Traffic Code No. 2918 are also taken into account in addition to this general framework.",
        ],
      },
    ],
    faq: [
      {
        question: "How is the amount of non-pecuniary compensation determined?",
        answer:
          "There is no fixed amount in the law; under TBK Art. 56, the judge decides on an amount consistent with equity, evaluating the severity of the event, the degree of fault, and the parties' social and economic circumstances.",
      },
      {
        question: "When does the statute of limitations expire in a compensation case?",
        answer:
          "Under TBK Art. 72, a case must be filed within 2 years of learning of the damage and the liable person, and in any event within 10 years of the date of the event. If the event also constitutes a criminal offence and the criminal limitation period is longer, that longer period applies.",
      },
      {
        question: "What are the heads of pecuniary compensation?",
        answer:
          "In the event of injury, treatment expenses, loss of earnings, loss of working capacity, and loss arising from impaired economic prospects (TBK Art. 54) may be claimed; in the event of death, funeral expenses, treatment expenses, and loss-of-support compensation (TBK Art. 53) may be claimed.",
      },
      {
        question: "Is an expert report required to calculate the compensation amount?",
        answer:
          "Yes, for items such as loss of support and loss of working capacity; these items are calculated by an expert based on actuarial computation and the national life table. For items that can be proven directly by documentation, an expert may not be necessary.",
      },
      {
        question: "What must be proven to hold someone liable for a tort?",
        answer:
          "Under TBK Art. 49, an unlawful act, the fault of the perpetrator, the existence of damage, and a causal link between the act and the damage must be proven. If any one of these four elements is missing, no liability for compensation arises.",
      },
    ],
  },

  "tahkim-arabuluculuk": {
    title: "Arbitration and Mediation",
    metaTitle: "Arbitration and Mediation",
    metaDescription:
      "Legal support and representation in Istanbul for mandatory and voluntary mediation, domestic arbitration, and international arbitration.",
    intro:
      "Arbitration and mediation are alternative dispute resolution methods that allow disputes between parties to be resolved outside the courts, more quickly and flexibly. Mediation is regulated by Mediation in Civil Disputes Code No. 6325, domestic arbitration by the relevant provisions of the Civil Procedure Code, and arbitration in disputes with a foreign element by International Arbitration Code No. 4686 (MTK).",
    sections: [
      {
        heading: "In Which Disputes Is Mediation Mandatory?",
        paragraphs: [
          "As a rule, applying to mediation is voluntary (optional mediation) for private-law disputes over which the parties may freely dispose. However, the legislature has made an application to a mediator, before filing certain types of cases, a precondition for litigation; a case filed without this condition being met is dismissed on procedural grounds.",
          "The main disputes falling within mandatory mediation are: employee-employer claim and compensation demands and reinstatement cases (from 1 January 2018, except for compensation cases arising from workplace accidents and occupational diseases), commercial cases concerning a monetary claim or compensation (from 1 January 2019), disputes within the jurisdiction of consumer courts (from 28 July 2020), and disputes arising from tenancy relationships (from 1 September 2023, except for eviction requests through enforcement proceedings without a judgment).",
        ],
      },
      {
        heading: "The Mediation Process and the Binding Effect of the Settlement Document",
        paragraphs: [
          "The mediation process is conducted with the assistance of an impartial, trained mediator; the law sets maximum periods (for example, 3 weeks for labour disputes, extendable by a further week in mandatory cases). If the parties fail to reach agreement, the mediator draws up a final minutes and the litigation precondition is deemed fulfilled; the right to file a case is preserved.",
          "If the parties reach agreement, the resulting settlement document — provided it is signed by the parties, their lawyers and the mediator, and contains a subject capable of enforcement — is directly treated as having the effect of a court judgment under Article 18 of Law No. 6325, and may be enforced without the need to file a separate case.",
        ],
      },
      {
        heading: "Domestic Arbitration: The Arbitration Provisions of the Civil Procedure Code",
        paragraphs: [
          "The arbitration provisions of the Civil Procedure Code apply to disputes where the seat of arbitration is Turkey and no foreign element is present. Disputes concerning rights in rem over immovable property, and matters not subject to the parties' free disposition such as divorce, inheritance and bankruptcy, are not arbitrable.",
          "Where the parties have included a valid arbitration clause in their contract, if the opposing party raises a timely objection based on this clause, the case is dismissed on procedural grounds and the dispute is resolved before an arbitrator. There is no ordinary appeal or cassation route against an arbitral award; only an annulment action based on the limited grounds listed in the law may be filed.",
        ],
      },
      {
        heading: "International Arbitration",
        paragraphs: [
          "International Arbitration Code No. 4686 applies to disputes involving a foreign element (for example, where the parties are domiciled in different countries or the place of performance of the contract is abroad) and where the seat of arbitration is Turkey. Turkey became a party to the 1958 New York Convention through Law No. 3731; as a result, arbitral awards rendered in Turkey may be recognised and enforced abroad, and awards rendered in foreign countries may likewise be recognised and enforced in Turkey through certain procedures.",
          "Under MTK Art. 15, an annulment action against an arbitral award may be filed before the civil court of first instance within 30 days of notification of the award. The grounds for annulment are limited in number and include: lack of capacity of a party, invalidity of the arbitration agreement, irregularity in the appointment of the arbitrator, the award being rendered outside the scope of the arbitration agreement, unequal treatment of the parties, non-arbitrability, and violation of public order.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I file a case directly without going to mediation?",
        answer:
          "No, for the types of labour, commercial, consumer and tenancy disputes listed in the law; applying to a mediator is a litigation precondition, and a case filed without this condition being met is dismissed on procedural grounds. For disputes outside this scope, mediation is optional.",
      },
      {
        question: "What happens if we fail to reach agreement in mediation?",
        answer:
          "The mediator draws up a final minutes; the litigation precondition is deemed fulfilled by this minutes, and the parties may exercise their right to file a case. The mediation process does not eliminate the right to litigate; it merely constitutes a preliminary step.",
      },
      {
        question: "Is an agreement reached in mediation as binding as a court decision?",
        answer:
          "Yes, a settlement document meeting the conditions required by law (signed by the parties, their lawyers and the mediator, and containing a subject capable of enforcement) is treated as having the effect of a court judgment and may be enforced directly.",
      },
      {
        question: "If our contract contains an arbitration clause, can I go to court?",
        answer:
          "No, if the opposing party raises a timely objection based on this clause; the case is dismissed on procedural grounds and the dispute must be resolved before an arbitrator. The validity and scope of the arbitration clause are assessed according to the wording of the contract.",
      },
      {
        question: "Can an arbitral award be appealed?",
        answer:
          "There is no substantive appeal or cassation route; however, an annulment action may be filed based on the limited grounds listed in the law (such as irregularity in the appointment of the arbitrator or violation of public order). The court does not re-examine the merits of the dispute in this case.",
      },
    ],
  },

  "yabancilar-hukuku": {
    title: "Foreigners and Citizenship Law",
    metaTitle: "Foreigners and Citizenship Law",
    metaDescription:
      "Legal support for residence and work permits, Turkish citizenship by investment, real estate acquisition, and appeals against deportation orders.",
    intro:
      "Foreigners and citizenship law governs foreign nationals' entry into, residence, work, and property acquisition in Turkey, as well as the routes to acquiring Turkish citizenship through investment. The principal source is Law on Foreigners and International Protection No. 6458 (YUKK); International Labour Force Code No. 6735 governs work permits, and the Implementing Regulation of the Turkish Citizenship Law governs citizenship applications.",
    sections: [
      {
        heading: "Types of Residence Permits",
        paragraphs: [
          "Under YUKK Art. 30, there are six types of residence permit: short-term, family, student, long-term, humanitarian, and victim-of-human-trafficking residence permits. A short-term residence permit is granted for a maximum of 2 years at a time; those applying through real estate investment may exceptionally be granted up to 5 years. A family residence permit is granted for a maximum of 3 years at a time.",
          "A long-term residence permit, on the other hand, is indefinite and requires at least 8 years of uninterrupted lawful residence in Turkey, not having received social assistance in the last 3 years, regular and sufficient income, and not posing a threat to public order (YUKK Art. 43). Periods spent as a student or under temporary protection are not included in this 8-year calculation.",
        ],
      },
      {
        heading: "The Work Permit Process",
        paragraphs: [
          "Under International Labour Force Code No. 6735, a work permit application is made not by the foreign national themselves, but by the employer who will employ them. For an application from abroad, the foreign national first applies to the Turkish embassy or consulate general in the country where they are located to obtain a reference number; the employer then applies electronically to the Ministry of Labour and Social Security using this number.",
          "For foreign nationals holding a valid residence permit in Turkey of at least 6 months, an application from within Turkey is also possible; in this case too, the application is made by the employer. A foreign national entering Turkey on the basis of a work permit must begin work within 6 months at the latest from the start date of the permit.",
        ],
      },
      {
        heading: "Turkish Citizenship by Investment",
        paragraphs: [
          "Under Article 20 of the Implementing Regulation of the Turkish Citizenship Law, foreign nationals investing above certain thresholds may exceptionally acquire Turkish citizenship. The investor's spouse and children under 18 may also benefit from this right.",
          "As of 2026, the applicable threshold amounts are: acquiring immovable property worth at least USD 400,000 and registering an annotation on the title deed that it will not be sold for 3 years; or acquiring fixed capital investment, bank deposits, government debt instruments, or shares in a real estate/venture capital investment fund worth at least USD 500,000 and holding these for 3 years; or creating employment for at least 50 people. These amounts were set by a Presidential Decree dated 6 January 2022 and may change over time, so it is advisable to confirm the current amount with our office before applying.",
        ],
      },
      {
        heading: "Property Acquisition and Appeals Against Deportation Orders",
        paragraphs: [
          "Under Article 35 of the Land Registry Code, foreign natural persons may acquire up to 30 hectares of immovable property per person nationwide in Turkey; a further limit applies of at most 10% of the area subject to private ownership at the district level. Foreign nationals are not granted the right to acquire property in military restricted zones and special security zones; additional restrictions targeting nationals of certain countries may also be set by current Presidential decrees and should be confirmed before proceeding.",
          "Against a deportation decision, a case may be filed with the competent administrative court under YUKK Art. 53–60 within 7 days of notification of the decision; filing the case automatically halts the deportation process. An entry ban that may be applied in connection with the decision generally lasts at most 5 years; this period may exceptionally be extended in cases of a serious threat to public order or security.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I obtain Turkish citizenship by buying a home, and how much investment is required?",
        answer:
          "Yes; as of 2026, an application for citizenship by investment may be made by acquiring immovable property worth at least USD 400,000 and registering an annotation on the title deed that it will not be sold for 3 years. As this amount may change over time, it is important to confirm the current figure before applying.",
      },
      {
        question: "How do I appeal a deportation decision?",
        answer:
          "A case must be filed with the competent administrative court within 7 days of notification of the decision. Filing the case automatically halts the deportation process, without a separate request for a stay of execution being necessary.",
      },
      {
        question: "What happens if my residence permit expires?",
        answer:
          "An extension application may be filed starting 60 days before the expiry date. If no application is made and the period lapses, the lawful stay right is violated and a risk of an entry ban may arise.",
      },
      {
        question: "Who files the work permit application — can the foreign national apply themselves?",
        answer:
          "No, the application is made by the employer who will employ the foreign national. In the process of applying from abroad, the foreign national only obtains a reference number from the consulate at the first stage; the employer completes the actual application.",
      },
      {
        question: "Can foreigners buy real estate anywhere in Turkey?",
        answer:
          "No; acquisition is not possible in military restricted zones and special security zones, and maximum area limits per person and per district apply, along with possible additional restrictions targeting nationals of certain countries. It is advisable to confirm the current situation before proceeding with a transaction.",
      },
    ],
  },
};
