var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "ch-Operations",
  "level": "1",
  "url": "ch-Operations.html",
  "type": "Chapter",
  "number": "1",
  "title": "Operations",
  "body": " Operations  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-WhatIsAField",
  "level": "1",
  "url": "ch-WhatIsAField.html",
  "type": "Chapter",
  "number": "2",
  "title": "What is a Field?",
  "body": " What is a Field?  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-WhatIsARing",
  "level": "1",
  "url": "ch-WhatIsARing.html",
  "type": "Chapter",
  "number": "3",
  "title": "What is a Ring?",
  "body": " What is a Ring?  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-SpecialRingElements",
  "level": "1",
  "url": "ch-SpecialRingElements.html",
  "type": "Chapter",
  "number": "4",
  "title": "Special Ring Elements",
  "body": " Special Ring Elements  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-Subrings",
  "level": "1",
  "url": "ch-Subrings.html",
  "type": "Chapter",
  "number": "5",
  "title": "Subrings",
  "body": " Subrings  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-Ideals",
  "level": "1",
  "url": "ch-Ideals.html",
  "type": "Chapter",
  "number": "6",
  "title": "Ideals",
  "body": " Ideals  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-QuotientRings",
  "level": "1",
  "url": "ch-QuotientRings.html",
  "type": "Chapter",
  "number": "7",
  "title": "Quotient Rings",
  "body": " Quotient Rings  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-RingHomomorphisms",
  "level": "1",
  "url": "ch-RingHomomorphisms.html",
  "type": "Chapter",
  "number": "8",
  "title": "Ring Homomorphisms",
  "body": " Ring Homomorphisms  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-RingIsomorphismTheorems",
  "level": "1",
  "url": "ch-RingIsomorphismTheorems.html",
  "type": "Chapter",
  "number": "9",
  "title": "Ring Isomorphism Theorems",
  "body": " Ring Isomorphism Theorems  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-TheIntegers",
  "level": "1",
  "url": "ch-TheIntegers.html",
  "type": "Chapter",
  "number": "10",
  "title": "The Integers",
  "body": " The Integers  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-WhatIsAGroup",
  "level": "1",
  "url": "ch-WhatIsAGroup.html",
  "type": "Chapter",
  "number": "11",
  "title": "What is a Group?",
  "body": " What is a Group?  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-Subgroups",
  "level": "1",
  "url": "ch-Subgroups.html",
  "type": "Chapter",
  "number": "12",
  "title": "Subgroups",
  "body": " Subgroups   The learning outcomes in this chapter are to:  ...understand the definition of a subgroup.  ...be able to give several examples of subgroups.  ...use the Subgroup test to shorten the argument showing that a subset is a subgroup.   As is typical in algebra, one definition of a subgroup is that it is a SUB-GROUP. That is, it is a subset of a group that is itself a group. Here's a more formal definition.   Subgroup  Let be a group. A set is a subgroup of if:  The set is a (nonempty) subset of .  If , then so is .  The set together with the operation is a group. That is, it satisfies the axioms of a group: the operation is associative; the operation has an identity element, denoted ; and, every element has an inverse with respect to .     As with subrings, the word nonempty is in parentheses because the emptyset is not a group, and so cannot be a subgroup of any group. The issue is that a group must contain at least one element: the identity element.    Some (possibly most or all) texts use to denote that is a subgroup of . The notation then means that is a proper subgroup of , meaning that and is a subgroup of .    Simplest, always in existence, subgroups  Let be a group with identity element . Then and are subgroups of . Is this clear?    Note that as with subrings, another way to rephrase the second item in the definition of a subgroup is that we say the set is closed under the operation .    Subgroup Test   Let be a group and a nonempty subset of . For any , we let denote the inverse of in . The set is a subgroup of if and only if for all .     First, we assume is a subgroup of and we must show that for all . So let . As is a subgroup of , it is a group, and so the inverse of is an element of , i.e. . As is a subgroup of , it is closed under multiplication and so we have as desired.   Next, we assume for all and we must show that is a subgroup of . To do this, we must show all of the axioms of a subgroup hold. In the hypotheses of the theorem, we were told that is a nonempty subset of , so that requirement is satisfied. For the second requirement, let . then by assumption we have . As , we know . Now, we can see that our hypothesis gives and using the hypothesis one more time gives as desired. For the final subgroup requirement, we must show that satisfies the axioms of a group. This means showing that the operation on is associative, has an identity in , and every element has an inverse in . These tasks are left for the exercises. For the identity part, looking carefully at the middle of this proof may give you what you need.     Often, the notation for the operation in a group is considered to be \"multiplication\" and the operation is written just as concatenation. With that standard, another way to phrase is to say that is a subgroup of if and only if for every , we have .    Recall that every ring is an abelian group under addition. Which of are subgroups of ? of ? of ? Name as many subgroups of as you can.    Let and assume that . Then . Recall that we used in defining the group . Certainly this subgroup claim requires that we allow a function to be thought of as a function by mapping each element to itself.     Complete the missing parts above. They're listed below to help you out!  Explain as briefly as possible by and are subgroups of a group .  Complete the proof of . In particular, you must show that in the backwards direction, we have that associativity holds, that the set has an identity element, and that every element has an inverse in .  Succinctly answer the questions in .  Prove the claim in . That is, prove that is a subgroup of when with .      Here are some basics of groups. Each problem has its own directions.  Let denote the set of invertible matrices with entries in . Recall from Linear Algebra that this is the set . Recall from Exercise 11.B(i) that is a group under matrix multiplication. Find at least three subgroups of this group, and three subsets which are not subgroups and justify your answers.  Let be a group and . The subgroup of generated by is defined as the smallest subgroup of which contains , and denoted . What is the subgroup of generated by ? What about the subgroup generated by and ? What about the subgroup generated by and ?     Prove Lagrange's Theorem for finite groups, which states that if is a (finite) group, and is a subgroup of , then the order of divides the order of .   One way to approach this involves definite cosets of a subgroup. To that end, let be a group and a subgroup of . Define an equivalence relation, , on via if and only if . We define the left cosets of in to be the equivalence classes of the equivalence relation on . With this language, the most common way to state Lagrange's Theorem is that for any group and any subgroup , we have where is the index of in , defined to be the number of left (or right) cosets of in .     For each statement, prove that it is true or give a counter-example to show that it is false.  If is a subgroup of and is abelian, then is abelian.  If is a subgroup of and is non-abelian, then is non-abelian.  If is a subgroup of and is finite, then is finite.      "
},
{
  "id": "ch-Subgroups-2",
  "level": "2",
  "url": "ch-Subgroups.html#ch-Subgroups-2",
  "type": "Objectives",
  "number": "12",
  "title": "The learning outcomes in this chapter are to:",
  "body": " The learning outcomes in this chapter are to:  ...understand the definition of a subgroup.  ...be able to give several examples of subgroups.  ...use the Subgroup test to shorten the argument showing that a subset is a subgroup.  "
},
{
  "id": "ch-Subgroups-4",
  "level": "2",
  "url": "ch-Subgroups.html#ch-Subgroups-4",
  "type": "Definition",
  "number": "12.0.1",
  "title": "Subgroup.",
  "body": " Subgroup  Let be a group. A set is a subgroup of if:  The set is a (nonempty) subset of .  If , then so is .  The set together with the operation is a group. That is, it satisfies the axioms of a group: the operation is associative; the operation has an identity element, denoted ; and, every element has an inverse with respect to .   "
},
{
  "id": "ch-Subgroups-5",
  "level": "2",
  "url": "ch-Subgroups.html#ch-Subgroups-5",
  "type": "Note",
  "number": "12.0.2",
  "title": "",
  "body": " As with subrings, the word nonempty is in parentheses because the emptyset is not a group, and so cannot be a subgroup of any group. The issue is that a group must contain at least one element: the identity element.  "
},
{
  "id": "ch-Subgroups-6",
  "level": "2",
  "url": "ch-Subgroups.html#ch-Subgroups-6",
  "type": "Note",
  "number": "12.0.3",
  "title": "",
  "body": " Some (possibly most or all) texts use to denote that is a subgroup of . The notation then means that is a proper subgroup of , meaning that and is a subgroup of .  "
},
{
  "id": "ch-Subgroups-7",
  "level": "2",
  "url": "ch-Subgroups.html#ch-Subgroups-7",
  "type": "Example",
  "number": "12.0.4",
  "title": "Simplest, always in existence, subgroups.",
  "body": " Simplest, always in existence, subgroups  Let be a group with identity element . Then and are subgroups of . Is this clear?  "
},
{
  "id": "ch-Subgroups-8",
  "level": "2",
  "url": "ch-Subgroups.html#ch-Subgroups-8",
  "type": "Note",
  "number": "12.0.5",
  "title": "",
  "body": " Note that as with subrings, another way to rephrase the second item in the definition of a subgroup is that we say the set is closed under the operation .  "
},
{
  "id": "theorem-subgroup",
  "level": "2",
  "url": "ch-Subgroups.html#theorem-subgroup",
  "type": "Theorem",
  "number": "12.0.6",
  "title": "Subgroup Test.",
  "body": " Subgroup Test   Let be a group and a nonempty subset of . For any , we let denote the inverse of in . The set is a subgroup of if and only if for all .     First, we assume is a subgroup of and we must show that for all . So let . As is a subgroup of , it is a group, and so the inverse of is an element of , i.e. . As is a subgroup of , it is closed under multiplication and so we have as desired.   Next, we assume for all and we must show that is a subgroup of . To do this, we must show all of the axioms of a subgroup hold. In the hypotheses of the theorem, we were told that is a nonempty subset of , so that requirement is satisfied. For the second requirement, let . then by assumption we have . As , we know . Now, we can see that our hypothesis gives and using the hypothesis one more time gives as desired. For the final subgroup requirement, we must show that satisfies the axioms of a group. This means showing that the operation on is associative, has an identity in , and every element has an inverse in . These tasks are left for the exercises. For the identity part, looking carefully at the middle of this proof may give you what you need.   "
},
{
  "id": "ch-Subgroups-10",
  "level": "2",
  "url": "ch-Subgroups.html#ch-Subgroups-10",
  "type": "Remark",
  "number": "12.0.7",
  "title": "",
  "body": " Often, the notation for the operation in a group is considered to be \"multiplication\" and the operation is written just as concatenation. With that standard, another way to phrase is to say that is a subgroup of if and only if for every , we have .  "
},
{
  "id": "example-rings-as-subgroups",
  "level": "2",
  "url": "ch-Subgroups.html#example-rings-as-subgroups",
  "type": "Example",
  "number": "12.0.8",
  "title": "",
  "body": " Recall that every ring is an abelian group under addition. Which of are subgroups of ? of ? of ? Name as many subgroups of as you can.  "
},
{
  "id": "example-subgroups-of-sn",
  "level": "2",
  "url": "ch-Subgroups.html#example-subgroups-of-sn",
  "type": "Example",
  "number": "12.0.9",
  "title": "",
  "body": " Let and assume that . Then . Recall that we used in defining the group . Certainly this subgroup claim requires that we allow a function to be thought of as a function by mapping each element to itself.  "
},
{
  "id": "ch-Subgroups-13-1",
  "level": "2",
  "url": "ch-Subgroups-13.html#ch-Subgroups-13-1",
  "type": "Exercise",
  "number": "12.12.A",
  "title": "",
  "body": " Complete the missing parts above. They're listed below to help you out!  Explain as briefly as possible by and are subgroups of a group .  Complete the proof of . In particular, you must show that in the backwards direction, we have that associativity holds, that the set has an identity element, and that every element has an inverse in .  Succinctly answer the questions in .  Prove the claim in . That is, prove that is a subgroup of when with .    "
},
{
  "id": "ch-Subgroups-13-2",
  "level": "2",
  "url": "ch-Subgroups-13.html#ch-Subgroups-13-2",
  "type": "Exercise",
  "number": "12.12.B",
  "title": "",
  "body": " Here are some basics of groups. Each problem has its own directions.  Let denote the set of invertible matrices with entries in . Recall from Linear Algebra that this is the set . Recall from Exercise 11.B(i) that is a group under matrix multiplication. Find at least three subgroups of this group, and three subsets which are not subgroups and justify your answers.  Let be a group and . The subgroup of generated by is defined as the smallest subgroup of which contains , and denoted . What is the subgroup of generated by ? What about the subgroup generated by and ? What about the subgroup generated by and ?   "
},
{
  "id": "ch-Subgroups-13-3",
  "level": "2",
  "url": "ch-Subgroups-13.html#ch-Subgroups-13-3",
  "type": "Exercise",
  "number": "12.12.C",
  "title": "",
  "body": " Prove Lagrange's Theorem for finite groups, which states that if is a (finite) group, and is a subgroup of , then the order of divides the order of .   One way to approach this involves definite cosets of a subgroup. To that end, let be a group and a subgroup of . Define an equivalence relation, , on via if and only if . We define the left cosets of in to be the equivalence classes of the equivalence relation on . With this language, the most common way to state Lagrange's Theorem is that for any group and any subgroup , we have where is the index of in , defined to be the number of left (or right) cosets of in .   "
},
{
  "id": "ch-Subgroups-13-4",
  "level": "2",
  "url": "ch-Subgroups-13.html#ch-Subgroups-13-4",
  "type": "Exercise",
  "number": "12.12.D",
  "title": "",
  "body": " For each statement, prove that it is true or give a counter-example to show that it is false.  If is a subgroup of and is abelian, then is abelian.  If is a subgroup of and is non-abelian, then is non-abelian.  If is a subgroup of and is finite, then is finite.    "
},
{
  "id": "ch-NormalSubgroups",
  "level": "1",
  "url": "ch-NormalSubgroups.html",
  "type": "Chapter",
  "number": "13",
  "title": "Normal Subgroups",
  "body": " Normal Subgroups   The learning outcomes in this chapter are to:  ...understand the definition of a normal subgroup.  ...be able to give several examples of normal subgroups.  ...understand some important properties of normal subgroups.   Recall that with rings, the definition of an ideal was ideally suited to define quotient rings and have the resulting operations be well-defined. The notion of a normal subgroup is analogous in the sense that we want something ideally suited to define a quotient group and have the operation be well-defined.  Let's think backwards a bit, and work with a group written additively. If is a group, and is a \"normal\" subgroup of , we might want to define the \"cosets\" of , i.e. the elements of the quotient group , to be of the form with . Suppose further that we want the operation on these to be given by for . For this to be well-defined, we'd need that for and , then , i.e., we'd need that whenever and . Because we might be more prone to assuming commutativity in additive notation, and we should be careful about not assuming things we're not given, let's switch now to multiplicative notation!  If is a group written multiplicatively, with identity element , and is a \"normal\" subgroup of , we have \"cosets\" of being of the form . For the operation to be well-defined, we will need to take such that and and need to show that , i.e. that . Being a bit more specific, note that for any , and fix some and . For the operation to be well-defined in this specific instance, we'll need that , i.e. we need that . Recall from Exercise 11.C.i that for any . Also, note that the identity element is always its own inverse. Now, note that for the operation to be well-defined, we need that is an element of . We're ready for the definition of a normal subgroup now, as we'll create that definition to make this work.    Normal Subgroup  Let be a group and a subset of . We say that is a normal subgroup of , and denote this as , if is a subgroup of and for every and , we have that as well.   The code to obtain the symbol is \\lhd .   Subgroups of \"our\" Favorite Abelian Group  Our favorite abelian group might be , and our favorite subgroup of this is probably where is our favorite nonzero integer. As uses additive notation, for to be a normal subgroup of , we'd need that whenever and . This is \"easily\" seen to work, as the commutativity of the operation allows for us to rewrite this as .    Normals in Abelian Groups   The example above seems to imply that every subgroup of an abelian group is normal. We should probably prove that!   Since every subgroup of an abelian group is normal, we should really look at a non-abelian example too:   Normal Subgroup of  Our smallest non-abelian group is . Consider the set . We can see, although you should ask yourself how, from this smaller part of the group table for that is a subgroup of :  A Normal Subgroup of                                 To check that it is normal, we need that for every and every . Note that it is clear that if , so we really only need to test this for . You should do these computations to get more comfortable with cycle notation for elements of a permutation group.   Let be a group written multiplicatively and a subgroup of . Recall that the left cosets of in are the sets of the form . We can similarly define the right cosets of in to be the sets of the form .   Normal Subgroup Equivalent Statements  Let be a group and a subgroup of . The following are equivalent: The subgroup is a normal subgroup of .  For every , we have . Note that this is a claim about set equality.  For every , we have where denotes the set of all elements of the form with . Note that the claim is also a claim about set equality.   The equivalence of the first two items above is typically phrased to say that \"A subgroup is normal if and only if its left and right cosets are the same.\"  Recall that when is a finite group, is the order of the group and defined to be the number of elements of . Also, recall from Exercise 12.C that if is a finite group and is a subgroup of , then the order of divides the order of .   Index of a Subgroup  Let be a subgroup of a finite group . We call the quotient the index of in and denote it by .    Index 2 Subgroups  Let be a finite group. If is a subgroup of of index , then is a normal subgroup of .   I'd like for \"us\" to prove this. However, maybe we'll delay on a complete proof for now. Here's a sketch to get you started. Of course, we need to assume that is a subgroup of and that has index . Our goal\/task is to show that is normal, which, by , we can do by proving for every . So let . There are two possibilities: If , then as is a subgroup of .  if , then and . As has index in , then is half of the elements of and the other half must be both and so that as desired.      Complete the missing parts above. They're listed below to help you out!  Let be an abelian group and any subgroup of . Prove that is a normal subgroup of .  Do the computations necessary to show that . Note that there are 3 choices for and only two interesting choices for . For your own benefit of learning, it would be best if you did this without the Cayley table for the group and only used cycle notation for the computations!  Prove . Note that to do this, it suffices to show one of the following chains of implications: or . It's unclear to me which of these you'll find easier.     Here are some basics of normal subgroups. Each exercise has its own instructions.  On the Final Exam in Spring 2025, you identified all six subgroups of . They were: , and . Which of these are normal and which are not normal? If you took the course in Fall 2025, you might want to first check that this is indeed an exhaustive list of subgroups of .  In Exercise 12.B.ii you identified some subgroups of . You'll need to scroll on the last one to see the whole thing unless your browser window is sufficiently wide:   Which of these are normal and which are not?      As with the ideals chapter, we'll skip this as it was split from the subgroups chapter to ensure a shorter lecture.    "
},
{
  "id": "ch-NormalSubgroups-2",
  "level": "2",
  "url": "ch-NormalSubgroups.html#ch-NormalSubgroups-2",
  "type": "Objectives",
  "number": "13",
  "title": "The learning outcomes in this chapter are to:",
  "body": " The learning outcomes in this chapter are to:  ...understand the definition of a normal subgroup.  ...be able to give several examples of normal subgroups.  ...understand some important properties of normal subgroups.  "
},
{
  "id": "ch-NormalSubgroups-6",
  "level": "2",
  "url": "ch-NormalSubgroups.html#ch-NormalSubgroups-6",
  "type": "Definition",
  "number": "13.0.1",
  "title": "Normal Subgroup.",
  "body": " Normal Subgroup  Let be a group and a subset of . We say that is a normal subgroup of , and denote this as , if is a subgroup of and for every and , we have that as well.  "
},
{
  "id": "ch-NormalSubgroups-7",
  "level": "2",
  "url": "ch-NormalSubgroups.html#ch-NormalSubgroups-7",
  "type": "Note",
  "number": "13.0.2",
  "title": "",
  "body": "The code to obtain the symbol is \\lhd . "
},
{
  "id": "ch-NormalSubgroups-8",
  "level": "2",
  "url": "ch-NormalSubgroups.html#ch-NormalSubgroups-8",
  "type": "Example",
  "number": "13.0.3",
  "title": "Subgroups of \"our\" Favorite Abelian Group.",
  "body": " Subgroups of \"our\" Favorite Abelian Group  Our favorite abelian group might be , and our favorite subgroup of this is probably where is our favorite nonzero integer. As uses additive notation, for to be a normal subgroup of , we'd need that whenever and . This is \"easily\" seen to work, as the commutativity of the operation allows for us to rewrite this as .  "
},
{
  "id": "theorem-normal-abelian-subgroups",
  "level": "2",
  "url": "ch-NormalSubgroups.html#theorem-normal-abelian-subgroups",
  "type": "Theorem",
  "number": "13.0.4",
  "title": "Normals in Abelian Groups.",
  "body": " Normals in Abelian Groups   The example above seems to imply that every subgroup of an abelian group is normal. We should probably prove that!  "
},
{
  "id": "normal-subgroup-of-S3",
  "level": "2",
  "url": "ch-NormalSubgroups.html#normal-subgroup-of-S3",
  "type": "Example",
  "number": "13.0.5",
  "title": "Normal Subgroup of <span class=\"process-math\">\\(S_3\\)<\/span>.",
  "body": " Normal Subgroup of  Our smallest non-abelian group is . Consider the set . We can see, although you should ask yourself how, from this smaller part of the group table for that is a subgroup of :  A Normal Subgroup of                                 To check that it is normal, we need that for every and every . Note that it is clear that if , so we really only need to test this for . You should do these computations to get more comfortable with cycle notation for elements of a permutation group.  "
},
{
  "id": "ch-NormalSubgroups-12",
  "level": "2",
  "url": "ch-NormalSubgroups.html#ch-NormalSubgroups-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "left cosets right cosets "
},
{
  "id": "theorem-normal-subgroup-equivalences",
  "level": "2",
  "url": "ch-NormalSubgroups.html#theorem-normal-subgroup-equivalences",
  "type": "Theorem",
  "number": "13.0.7",
  "title": "Normal Subgroup Equivalent Statements.",
  "body": " Normal Subgroup Equivalent Statements  Let be a group and a subgroup of . The following are equivalent: The subgroup is a normal subgroup of .  For every , we have . Note that this is a claim about set equality.  For every , we have where denotes the set of all elements of the form with . Note that the claim is also a claim about set equality.  "
},
{
  "id": "ch-NormalSubgroups-15",
  "level": "2",
  "url": "ch-NormalSubgroups.html#ch-NormalSubgroups-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order "
},
{
  "id": "ch-NormalSubgroups-16",
  "level": "2",
  "url": "ch-NormalSubgroups.html#ch-NormalSubgroups-16",
  "type": "Definition",
  "number": "13.0.8",
  "title": "Index of a Subgroup.",
  "body": " Index of a Subgroup  Let be a subgroup of a finite group . We call the quotient the index of in and denote it by .  "
},
{
  "id": "ch-NormalSubgroups-17",
  "level": "2",
  "url": "ch-NormalSubgroups.html#ch-NormalSubgroups-17",
  "type": "Theorem",
  "number": "13.0.9",
  "title": "Index 2 Subgroups.",
  "body": " Index 2 Subgroups  Let be a finite group. If is a subgroup of of index , then is a normal subgroup of .   I'd like for \"us\" to prove this. However, maybe we'll delay on a complete proof for now. Here's a sketch to get you started. Of course, we need to assume that is a subgroup of and that has index . Our goal\/task is to show that is normal, which, by , we can do by proving for every . So let . There are two possibilities: If , then as is a subgroup of .  if , then and . As has index in , then is half of the elements of and the other half must be both and so that as desired.   "
},
{
  "id": "ch-NormalSubgroups-18-1",
  "level": "2",
  "url": "ch-NormalSubgroups-18.html#ch-NormalSubgroups-18-1",
  "type": "Exercise",
  "number": "13.13.A",
  "title": "",
  "body": " Complete the missing parts above. They're listed below to help you out!  Let be an abelian group and any subgroup of . Prove that is a normal subgroup of .  Do the computations necessary to show that . Note that there are 3 choices for and only two interesting choices for . For your own benefit of learning, it would be best if you did this without the Cayley table for the group and only used cycle notation for the computations!  Prove . Note that to do this, it suffices to show one of the following chains of implications: or . It's unclear to me which of these you'll find easier.   "
},
{
  "id": "ch-NormalSubgroups-18-2",
  "level": "2",
  "url": "ch-NormalSubgroups-18.html#ch-NormalSubgroups-18-2",
  "type": "Exercise",
  "number": "13.13.B",
  "title": "",
  "body": " Here are some basics of normal subgroups. Each exercise has its own instructions.  On the Final Exam in Spring 2025, you identified all six subgroups of . They were: , and . Which of these are normal and which are not normal? If you took the course in Fall 2025, you might want to first check that this is indeed an exhaustive list of subgroups of .  In Exercise 12.B.ii you identified some subgroups of . You'll need to scroll on the last one to see the whole thing unless your browser window is sufficiently wide:   Which of these are normal and which are not?    "
},
{
  "id": "ch-NormalSubgroups-18-3",
  "level": "2",
  "url": "ch-NormalSubgroups-18.html#ch-NormalSubgroups-18-3",
  "type": "Exercise",
  "number": "13.13.C",
  "title": "",
  "body": " As with the ideals chapter, we'll skip this as it was split from the subgroups chapter to ensure a shorter lecture.  "
},
{
  "id": "ch-QuotientGroups",
  "level": "1",
  "url": "ch-QuotientGroups.html",
  "type": "Chapter",
  "number": "14",
  "title": "Quotient Groups",
  "body": " Quotient Groups   The learning outcomes in this chapter are to:  ...understand the definition of a quotient group.  ...be able to give several examples of quotient groups.  ...be able to explain why quotient groups are groups.  ...understand why normal subgroups are the necessary type of subgroup to mod out by.  ...understand that quotient groups and quotient rings are analogous structures.   Let’s start off with working on drawing parallels between quotient rings and quotient groups. In particular, it would be good to have a better understanding of the cosets of a normal subgroup of a group and their relationship with cosets of an ideal of a ring.  Recall (probably from Math 301) that equivalence relations define a partition on a set, and a partition of a set defines an equivalence relation. In ring land, we first defined an equivalence relation, and defined our cosets to be the equivalence classes that form the associated partition. Since we already have a definition of cosets for groups, perhaps we should think about things in reverse here by showing our cosets form a partition and reverse engineering the equivalence relation out of that.    Let be a group and a subgroup of . Then, the left cosets of form a partition of , i.e., and for , either or .    Let be a group and a subgroup of . As for every , then the containment holds. To see that we have equality, let and note that since , we have so that as well. What remains then is to let , assume that and show that . So let and write for some . Also, since , we know there is some . Write for some . Multiplying on the right by yields . Thus, . Since , we know and so , which shows that . A similar argument shows that so that as desired.    Now that we know the left cosets of a normal subgroup form a partition of the group, we know there is an associated equivalence relation. Let's work out the details of that. Let denote the set of a partition which contains the element . The equivalence relation defined from a partition is . Using the notation we have for the cosets, this becomes and so our equivalence relation boils down to being which, we might have guessed based on the equivalence relation for ideals.    Let be a group, a normal subgroup of , and define an operation on the left cosets of via . With this operation, the set of left cosets is a group, denoted and pronounced G mod N .    I'm going to leave this whole proof to you. Make sure you show all of the necessary parts: the claimed operation is well-defined, the operation is associative, the operation has an identity element, and every element has an inverse. Don't forget that the set on which this operation is defined is the set of left cosets: .      Let be a group and a normal subgroup of . Then the group is called a quotient group of .     Consider the group and the normal subgroup of , which we'll denote . We should figure out if is a group we've seen before by computing its elements and a Cayley table for the group. We'll fill in this table during class and create the Cayley table. Afterwards, I'll update these notes with the answer(s). We'll know we've got all the cosets when every element of the group is in a coset. We will ensure we only have one representative of each coset by only listing each element once.  We found that the elements are: , , , and . The group table is:  The group                                                 Complete the missing parts above. They're listed below to help you out!  Prove . It may help to look back on our proof of Theorem 7.4.  What group does look an awful lot like? How might we convince ourselves that these are the same group?        Here are some basics of quotient groups. Each problem has its own directions.  (Bonus!) As with rings, if is a subgroup of and is not a normal subgroup, things can go terribly wrong. Identify a non-normal subgroup of which I'll call . Then identify an element such that . Conclude that the operation on the quotient of by the non-normal subgroup you've identified is not well-defined by demonstrating an explicit example. For which elements of is it the case that ?  The center of a group is the subgroup . This notation comes from the word zentrum which is German for center. Prove that for any group , we have is a normal subgroup of , so that is always a group.  Let be a group and a subgroup of . The normalizer of in is the set , i.e. the largest subgroup of containing in which is normal. Compute for and .        Let be a finite group and a normal subgroup of . Prove that , that is, the order of is the index of in .      Let be an abelian group and a subgroup of . Prove that is abelian. Also, give an example of a non-abelian group and normal subgroup such that is abelian.      Prove that for all with .     "
},
{
  "id": "ch-QuotientGroups-2",
  "level": "2",
  "url": "ch-QuotientGroups.html#ch-QuotientGroups-2",
  "type": "Objectives",
  "number": "14",
  "title": "The learning outcomes in this chapter are to:",
  "body": " The learning outcomes in this chapter are to:  ...understand the definition of a quotient group.  ...be able to give several examples of quotient groups.  ...be able to explain why quotient groups are groups.  ...understand why normal subgroups are the necessary type of subgroup to mod out by.  ...understand that quotient groups and quotient rings are analogous structures.  "
},
{
  "id": "prop-CosetsPartition",
  "level": "2",
  "url": "ch-QuotientGroups.html#prop-CosetsPartition",
  "type": "Proposition",
  "number": "14.0.1",
  "title": "",
  "body": "  Let be a group and a subgroup of . Then, the left cosets of form a partition of , i.e., and for , either or .    Let be a group and a subgroup of . As for every , then the containment holds. To see that we have equality, let and note that since , we have so that as well. What remains then is to let , assume that and show that . So let and write for some . Also, since , we know there is some . Write for some . Multiplying on the right by yields . Thus, . Since , we know and so , which shows that . A similar argument shows that so that as desired.   "
},
{
  "id": "thm-QuotientGroupsareGroups",
  "level": "2",
  "url": "ch-QuotientGroups.html#thm-QuotientGroupsareGroups",
  "type": "Theorem",
  "number": "14.0.2",
  "title": "",
  "body": "  Let be a group, a normal subgroup of , and define an operation on the left cosets of via . With this operation, the set of left cosets is a group, denoted and pronounced G mod N .    I'm going to leave this whole proof to you. Make sure you show all of the necessary parts: the claimed operation is well-defined, the operation is associative, the operation has an identity element, and every element has an inverse. Don't forget that the set on which this operation is defined is the set of left cosets: .   "
},
{
  "id": "def-QuotientGroupDefn",
  "level": "2",
  "url": "ch-QuotientGroups.html#def-QuotientGroupDefn",
  "type": "Definition",
  "number": "14.0.3",
  "title": "",
  "body": "  Let be a group and a normal subgroup of . Then the group is called a quotient group of .   "
},
{
  "id": "eg-Q8modZ",
  "level": "2",
  "url": "ch-QuotientGroups.html#eg-Q8modZ",
  "type": "Example",
  "number": "14.0.4",
  "title": "",
  "body": " Consider the group and the normal subgroup of , which we'll denote . We should figure out if is a group we've seen before by computing its elements and a Cayley table for the group. We'll fill in this table during class and create the Cayley table. Afterwards, I'll update these notes with the answer(s). We'll know we've got all the cosets when every element of the group is in a coset. We will ensure we only have one representative of each coset by only listing each element once.  We found that the elements are: , , , and . The group table is:  The group                                             "
},
{
  "id": "exercises-QuotientGroups-1",
  "level": "2",
  "url": "exercises-QuotientGroups.html#exercises-QuotientGroups-1",
  "type": "Exercise",
  "number": "14.14.A",
  "title": "",
  "body": "  Complete the missing parts above. They're listed below to help you out!  Prove . It may help to look back on our proof of Theorem 7.4.  What group does look an awful lot like? How might we convince ourselves that these are the same group?     "
},
{
  "id": "exercises-QuotientGroups-2",
  "level": "2",
  "url": "exercises-QuotientGroups.html#exercises-QuotientGroups-2",
  "type": "Exercise",
  "number": "14.14.B",
  "title": "",
  "body": "  Here are some basics of quotient groups. Each problem has its own directions.  (Bonus!) As with rings, if is a subgroup of and is not a normal subgroup, things can go terribly wrong. Identify a non-normal subgroup of which I'll call . Then identify an element such that . Conclude that the operation on the quotient of by the non-normal subgroup you've identified is not well-defined by demonstrating an explicit example. For which elements of is it the case that ?  The center of a group is the subgroup . This notation comes from the word zentrum which is German for center. Prove that for any group , we have is a normal subgroup of , so that is always a group.  Let be a group and a subgroup of . The normalizer of in is the set , i.e. the largest subgroup of containing in which is normal. Compute for and .     "
},
{
  "id": "exercises-QuotientGroups-3",
  "level": "2",
  "url": "exercises-QuotientGroups.html#exercises-QuotientGroups-3",
  "type": "Exercise",
  "number": "14.14.C",
  "title": "",
  "body": "  Let be a finite group and a normal subgroup of . Prove that , that is, the order of is the index of in .   "
},
{
  "id": "exercises-QuotientGroups-4",
  "level": "2",
  "url": "exercises-QuotientGroups.html#exercises-QuotientGroups-4",
  "type": "Exercise",
  "number": "14.14.D",
  "title": "",
  "body": "  Let be an abelian group and a subgroup of . Prove that is abelian. Also, give an example of a non-abelian group and normal subgroup such that is abelian.   "
},
{
  "id": "exercises-QuotientGroups-5",
  "level": "2",
  "url": "exercises-QuotientGroups.html#exercises-QuotientGroups-5",
  "type": "Exercise",
  "number": "14.14.E",
  "title": "",
  "body": "  Prove that for all with .   "
},
{
  "id": "ch-GroupHomomorphisms",
  "level": "1",
  "url": "ch-GroupHomomorphisms.html",
  "type": "Chapter",
  "number": "15",
  "title": "Group Homomorphisms",
  "body": " Group Homomorphisms   The learning outcomes for this chapter are to...  ...understand the definition of group homomorphisms and isomorphisms.  ...be able to give several (non)-examples of homomorphisms and isomorphisms.   Just like ring homomorphisms were the \"useful\" maps between rings, group homomorphisms can be viewed as the \"useful\" maps between groups. Recall also that the \"useful\" ring maps were ones that preserved the operations. Here's the main definition of this chapter:   Group Homomorophisms   Let and be groups, with operations and respectively. A function is called a group homomorphism (or simply homomorphism when it's clear we're discussing groups) if for every , .     A \"Natural\" Surjection  Let and . The function given by is a surjective group homomorphism. Indeed, .    Generalizing our \"Natural\" Surjection  More generally, there is a surjective group homomorphism for any group and normal subgroup of given by . (Possibly) you should prove this!?    A \"Natural\" Injection  Also, for any group and subgroup , the \"natural\" inclusion map: is an injective group homomorphism.    A Non-Example  The map given by is not a group homomorphism. Why not?   Take a look back at Definition 8.7 if you need reminders about the words injective, surjective, and\/or bijective.   Group Isomorphisms   Let and be groups. A function is called a group isomorphism (or simply isomorphism when it is clear we're discussing groups) if is a bijective homomorphism. When such an isomorphism exists, we say that and are isomorphic and denote this by .     An Isomorphism  Recall that the group from looked an awful lot like . In fact, these are isomorphic groups! We can demonstrate this by comparing Cayley tables and explicitly giving the bijection; however, showing the map is a homomorphism without demonstrating that the Cayley tables are just relabeled is harder to do. We'll come back to this in the next chapter once we have a few more tools to prove these are isomorphic in a nicer way.     Complete the missing parts above. They're listed below to help you out!  Let be a group and a normal subgroup of . From , show that the function given by is a surjective homomorphism. Note that this means you must both show it is a group homomorphism and a surjective function.  Let be a subgroup of a group and the function from . Show that this is indeed a group homomorphism.  Recall that every ring is a group under addition, so when we discuss the group , we're using only the addition operation. Either prove the function given by is a group homomorphism, or demonstrate an explicit counterexample showing it is not a group homomorphism.      Here are some (non-)examples of group homomorphisms and isomorphisms. Show that each is a group homomorphism or is not a homomorphism. For those that are group homomorphisms, determine whether or not they're injective or surjective (or bijective). For those that are not group homomorphisms, provide an explicit counterexample to the definition of a group homomorphism. Since some of these are rings, so inherently come with two operations, does it matter which operation you choose? Phrased another way, is a ring also group under both operations? The function given by .  The function given by .  The function given by .  The function given by . As the notation here may be hard to follow, here's an example with : .      Recall from Example 11.9 that the group is the group of symmetries of a regular -gon and has elements. Prove that .      Recall from Example 11.9 that the group is the group of symmetries of a regular -gon and has elements. Prove that there is an injective homomorphism for all .      You may do any, all, or none of these problems. You will only be assigned them if you put them at the top of your list, or if you finish and need more to work on. They're all related to problem 8.D .   If , show that there is a surjective group homomorphism .    Explain why any group homomorphism with is not surjective and any homomorphism with is not injective.    List all the group homomorphisms , and . Like the examples in problem 8.D, some of these are likely large enough groups that it is a bad ida to try and list all the functions and identify the homomorphisms from that list. What patterns do you notice here? You need not prove the patterns hold true, just find at least one.    List all the group homomorphisms , and . Like some of the examples in problem 8.D, these are all large enough groups that it is a bad ida to try and list all the functions and identify the homomorphisms from that list. What patterns do you notice here? You need not prove the patterns hold true, just find at least one.        "
},
{
  "id": "ch-GroupHomomorphisms-2",
  "level": "2",
  "url": "ch-GroupHomomorphisms.html#ch-GroupHomomorphisms-2",
  "type": "Objectives",
  "number": "15",
  "title": "The learning outcomes for this chapter are to...",
  "body": " The learning outcomes for this chapter are to...  ...understand the definition of group homomorphisms and isomorphisms.  ...be able to give several (non)-examples of homomorphisms and isomorphisms.  "
},
{
  "id": "def-GroupHom",
  "level": "2",
  "url": "ch-GroupHomomorphisms.html#def-GroupHom",
  "type": "Definition",
  "number": "15.0.1",
  "title": "Group Homomorophisms.",
  "body": " Group Homomorophisms   Let and be groups, with operations and respectively. A function is called a group homomorphism (or simply homomorphism when it's clear we're discussing groups) if for every , .   "
},
{
  "id": "ch-GroupHomomorphisms-5",
  "level": "2",
  "url": "ch-GroupHomomorphisms.html#ch-GroupHomomorphisms-5",
  "type": "Example",
  "number": "15.0.2",
  "title": "A \"Natural\" Surjection.",
  "body": " A \"Natural\" Surjection  Let and . The function given by is a surjective group homomorphism. Indeed, .  "
},
{
  "id": "eg-GroupNatSurj",
  "level": "2",
  "url": "ch-GroupHomomorphisms.html#eg-GroupNatSurj",
  "type": "Example",
  "number": "15.0.3",
  "title": "Generalizing our \"Natural\" Surjection.",
  "body": " Generalizing our \"Natural\" Surjection  More generally, there is a surjective group homomorphism for any group and normal subgroup of given by . (Possibly) you should prove this!?  "
},
{
  "id": "eg-GroupNatInj",
  "level": "2",
  "url": "ch-GroupHomomorphisms.html#eg-GroupNatInj",
  "type": "Example",
  "number": "15.0.4",
  "title": "A \"Natural\" Injection.",
  "body": " A \"Natural\" Injection  Also, for any group and subgroup , the \"natural\" inclusion map: is an injective group homomorphism.  "
},
{
  "id": "ch-GroupHomomorphisms-8",
  "level": "2",
  "url": "ch-GroupHomomorphisms.html#ch-GroupHomomorphisms-8",
  "type": "Example",
  "number": "15.0.5",
  "title": "A Non-Example.",
  "body": " A Non-Example  The map given by is not a group homomorphism. Why not?  "
},
{
  "id": "def-GroupIsom",
  "level": "2",
  "url": "ch-GroupHomomorphisms.html#def-GroupIsom",
  "type": "Definition",
  "number": "15.0.6",
  "title": "Group Isomorphisms.",
  "body": " Group Isomorphisms   Let and be groups. A function is called a group isomorphism (or simply isomorphism when it is clear we're discussing groups) if is a bijective homomorphism. When such an isomorphism exists, we say that and are isomorphic and denote this by .   "
},
{
  "id": "ch-GroupHomomorphisms-11",
  "level": "2",
  "url": "ch-GroupHomomorphisms.html#ch-GroupHomomorphisms-11",
  "type": "Example",
  "number": "15.0.7",
  "title": "An Isomorphism.",
  "body": " An Isomorphism  Recall that the group from looked an awful lot like . In fact, these are isomorphic groups! We can demonstrate this by comparing Cayley tables and explicitly giving the bijection; however, showing the map is a homomorphism without demonstrating that the Cayley tables are just relabeled is harder to do. We'll come back to this in the next chapter once we have a few more tools to prove these are isomorphic in a nicer way.  "
},
{
  "id": "exercises-GroupHom-1",
  "level": "2",
  "url": "exercises-GroupHom.html#exercises-GroupHom-1",
  "type": "Exercise",
  "number": "15.15.A",
  "title": "",
  "body": " Complete the missing parts above. They're listed below to help you out!  Let be a group and a normal subgroup of . From , show that the function given by is a surjective homomorphism. Note that this means you must both show it is a group homomorphism and a surjective function.  Let be a subgroup of a group and the function from . Show that this is indeed a group homomorphism.  Recall that every ring is a group under addition, so when we discuss the group , we're using only the addition operation. Either prove the function given by is a group homomorphism, or demonstrate an explicit counterexample showing it is not a group homomorphism.    "
},
{
  "id": "exercises-GroupHom-2",
  "level": "2",
  "url": "exercises-GroupHom.html#exercises-GroupHom-2",
  "type": "Exercise",
  "number": "15.15.B",
  "title": "",
  "body": " Here are some (non-)examples of group homomorphisms and isomorphisms. Show that each is a group homomorphism or is not a homomorphism. For those that are group homomorphisms, determine whether or not they're injective or surjective (or bijective). For those that are not group homomorphisms, provide an explicit counterexample to the definition of a group homomorphism. Since some of these are rings, so inherently come with two operations, does it matter which operation you choose? Phrased another way, is a ring also group under both operations? The function given by .  The function given by .  The function given by .  The function given by . As the notation here may be hard to follow, here's an example with : .   "
},
{
  "id": "exercises-GroupHom-3",
  "level": "2",
  "url": "exercises-GroupHom.html#exercises-GroupHom-3",
  "type": "Exercise",
  "number": "15.15.C",
  "title": "",
  "body": "  Recall from Example 11.9 that the group is the group of symmetries of a regular -gon and has elements. Prove that .   "
},
{
  "id": "exercises-GroupHom-4",
  "level": "2",
  "url": "exercises-GroupHom.html#exercises-GroupHom-4",
  "type": "Exercise",
  "number": "15.15.D",
  "title": "",
  "body": "  Recall from Example 11.9 that the group is the group of symmetries of a regular -gon and has elements. Prove that there is an injective homomorphism for all .   "
},
{
  "id": "exercises-GroupHom-5",
  "level": "2",
  "url": "exercises-GroupHom.html#exercises-GroupHom-5",
  "type": "Exercise",
  "number": "15.15.E",
  "title": "",
  "body": "  You may do any, all, or none of these problems. You will only be assigned them if you put them at the top of your list, or if you finish and need more to work on. They're all related to problem 8.D .   If , show that there is a surjective group homomorphism .    Explain why any group homomorphism with is not surjective and any homomorphism with is not injective.    List all the group homomorphisms , and . Like the examples in problem 8.D, some of these are likely large enough groups that it is a bad ida to try and list all the functions and identify the homomorphisms from that list. What patterns do you notice here? You need not prove the patterns hold true, just find at least one.    List all the group homomorphisms , and . Like some of the examples in problem 8.D, these are all large enough groups that it is a bad ida to try and list all the functions and identify the homomorphisms from that list. What patterns do you notice here? You need not prove the patterns hold true, just find at least one.      "
},
{
  "id": "ch-GroupIsomThms",
  "level": "1",
  "url": "ch-GroupIsomThms.html",
  "type": "Chapter",
  "number": "16",
  "title": "Group Isomorphism Theorems",
  "body": " Group Isomorphism Theorems   The learning outcomes in this chapter are to:  ...be able to state all three isomorphism theorems for groups.  ...be able to use the group isomorphism theorems in examples.  ...understand the need in many proofs for showing that the maps are well-defined.   There are three isomorphism theorems (telling us that creating certain algebraic structures always results in isomorphic structures) and they hold for many different kinds of algebraic structures. In this chapter, we'll focus on the group versions of the theorems. First, we'll need a definition:    Let and be groups and be a group homomorphism. The kernel of is the subset of defined as the set of stuff that maps to the appropriate identity, i.e. where denotes the identity element in . Also, recall that the image of is the subset of defined as .    We've done less with groups than we have with rings so far, and the following facts could be useful in your proofs. The proofs of these facts are similar to the proofs of the similar facts for rings; however, I neither want to include them in lecture, nor ask you to put them in your portfolio. Maybe make Dr. Shultis prove them in class some time soon!?    Let and be groups written multiplicatively for notational convenience and a group homomorphism. If and denote the identity elements of and respectively, then .  For any , we have .      First Isomorphism Theorem for Groups   Let and be groups and a group homomorphism. Then is a normal subgroup of , is a subgroup of and .    We have already abused multiplication notation by using it between two things that aren't actually group elements. We did this when we wrote as . This is also similar to the abuse in notation from Quotient Rings. Taken literally, this is nonsense if is a group element and is a subgroup (i.e. a set of elements). But we just meant . Similarly, we will further abuse notation to \"multiply\" two sets of group elements and by multiplying every combination of their elements: .   Second Isomorphism Theorem for Groups   Let be a group written multiplicatively for notational convenience and , subgroups of with . Also, let denote the subset of . Then, is a subgroup of , is a normal subgroup of , is a normal subgroup of , and .     Third Isomorphism Theorem for Groups   Let be a group, with normal subgroups of . Then, is a normal subgroup of and .      Let be a (probably finite for now) set. Let denote the set of all \"words\" in the elements of and their \"inverses\". So some examples of elements of include and . Let be an operation on defined by concatenation so that for our example, . Note also that we typically don't write and immediately next to one another since they're inverse of each other and so cancel out. Also, when we have a string of several 's in a row, we typically use exponential notation, so and , and our product above should be simplified to . Then, is a group under this operation and is called the free group on .     You have already seen the free group in the exercises. Indeed, Dr. Hogle added Exercise 11B.iii to the notes, and introduced us there to the free group on the set .   A Quotient of a Free Group - Introducing Generators and Relations  Let and let be the free group on . Then, let be the normal subgroup of generated by . Then . Indeed, define a homomorphism via and . Then, which means that as is the normal subgroup of generated by , , and . It can also be shown that . Moreover, as , then . We call the set of generators of and the set of relations of Hence, the notational choices! . In fact, every group can be constructed in this way with a set of generators and relations! However, we'll leave that as an unproven fact for now.  More on Generators and Relations  The is for \"generators\" and the is for \"relations.\" Moreover, when we say is the normal subgroup generated by , we mean that is the smallest set in which contains and is a normal subgroup of .       Prove the First Isomorphism Theorem for Groups. The steps below should guide your proof.  Show that is a normal subgroup of . Note that this requires proving that is a subgroup and that it's normal. We, unfortunately, don't have a \"normal subgroup test.\"  Show that is a subgroup of (presumably using the subgroup test).  Define the \"obvious\" function to use here . As you may not yet have enough experience to have an instinct as to what the \"obvious\" function is, I'd be happy to have a whole class discussion about ideas\/suggestions that you do have.  Since elements of are cosets (and hence typically have multiple coset representatives), we'll need to show the function we wrote down is \"well-defined.\" That is, using to denote , we need that for any , we have . If this step fails, that's a good hint that our function in the previous step is wrong.  Now that we know is a well-defined function between the two groups we want to show are isomorphic, we need to show that is a group homomorphism. This step should be straight-forward. Use the definition of a homomorphism and the way that is defined.  We also need to show that is a bijection.        These are some basic exercises on using the isomorphism theorems.  Prove that using the First Isomorphism Theorem.  Let be a field and let denote the multiplicative identity in . The notation denotes the group of matrices with nonzero determinant and entries in . The notation denotes the subgroup of where the matrices in have determinant . The notation denotes the nonzero elements of , i.e. the elements of which have multiplicative inverses. Lastly, the notation denotes the matrices of the form with . Use the Second Isomorphism Theorem for Groups to show that where .  Note that is a normal subgroup of which is contained in . We will spend some time in the next chapter learning more about the notation for the symmetric groups, . In this exercise, use the Third Isomorphism Theorem for Groups with these groups to prove a new isomorphism. This should be doable even without the knowledge you will learn in the next chapter. Is this too vague of a problem? Do you need more guidance?         Prove the Second Isomorphism Theorem for Groups. To prove it, you'll need to show that is a subgroup of , is a normal subgroup of , and is a normal subgroup of . You'll then need to go about showing the claimed isomorphism holds. To show that isomorphism, you can either appeal to , or write down a function and show it is a (well-defined) bijective homomorphism.      Prove the Third Isomorphism Theorem for Groups. To prove it, you'll need to show that is a normal subgroup of . You'll then need to go about showing the claimed isomorphism holds. To show that isomorphism, you can either appeal to , or write down a function and show it is a (well-defined) bijective homomorphism.     "
},
{
  "id": "ch-GroupIsomThms-2",
  "level": "2",
  "url": "ch-GroupIsomThms.html#ch-GroupIsomThms-2",
  "type": "Objectives",
  "number": "16",
  "title": "The learning outcomes in this chapter are to:",
  "body": " The learning outcomes in this chapter are to:  ...be able to state all three isomorphism theorems for groups.  ...be able to use the group isomorphism theorems in examples.  ...understand the need in many proofs for showing that the maps are well-defined.  "
},
{
  "id": "def-groupkernel",
  "level": "2",
  "url": "ch-GroupIsomThms.html#def-groupkernel",
  "type": "Definition",
  "number": "16.0.1",
  "title": "",
  "body": "  Let and be groups and be a group homomorphism. The kernel of is the subset of defined as the set of stuff that maps to the appropriate identity, i.e. where denotes the identity element in . Also, recall that the image of is the subset of defined as .   "
},
{
  "id": "prop-groupfacts",
  "level": "2",
  "url": "ch-GroupIsomThms.html#prop-groupfacts",
  "type": "Proposition",
  "number": "16.0.2",
  "title": "",
  "body": "  Let and be groups written multiplicatively for notational convenience and a group homomorphism. If and denote the identity elements of and respectively, then .  For any , we have .    "
},
{
  "id": "thm-firstgroupisomtheorem",
  "level": "2",
  "url": "ch-GroupIsomThms.html#thm-firstgroupisomtheorem",
  "type": "Theorem",
  "number": "16.0.3",
  "title": "First Isomorphism Theorem for Groups.",
  "body": " First Isomorphism Theorem for Groups   Let and be groups and a group homomorphism. Then is a normal subgroup of , is a subgroup of and .   "
},
{
  "id": "thm-secondgroupisomtheorem",
  "level": "2",
  "url": "ch-GroupIsomThms.html#thm-secondgroupisomtheorem",
  "type": "Theorem",
  "number": "16.0.4",
  "title": "Second Isomorphism Theorem for Groups.",
  "body": " Second Isomorphism Theorem for Groups   Let be a group written multiplicatively for notational convenience and , subgroups of with . Also, let denote the subset of . Then, is a subgroup of , is a normal subgroup of , is a normal subgroup of , and .   "
},
{
  "id": "thm-thirdgroupisomtheorem",
  "level": "2",
  "url": "ch-GroupIsomThms.html#thm-thirdgroupisomtheorem",
  "type": "Theorem",
  "number": "16.0.5",
  "title": "Third Isomorphism Theorem for Groups.",
  "body": " Third Isomorphism Theorem for Groups   Let be a group, with normal subgroups of . Then, is a normal subgroup of and .   "
},
{
  "id": "def-freegroup",
  "level": "2",
  "url": "ch-GroupIsomThms.html#def-freegroup",
  "type": "Definition",
  "number": "16.0.6",
  "title": "",
  "body": "  Let be a (probably finite for now) set. Let denote the set of all \"words\" in the elements of and their \"inverses\". So some examples of elements of include and . Let be an operation on defined by concatenation so that for our example, . Note also that we typically don't write and immediately next to one another since they're inverse of each other and so cancel out. Also, when we have a string of several 's in a row, we typically use exponential notation, so and , and our product above should be simplified to . Then, is a group under this operation and is called the free group on .   "
},
{
  "id": "ch-GroupIsomThms-12",
  "level": "2",
  "url": "ch-GroupIsomThms.html#ch-GroupIsomThms-12",
  "type": "Remark",
  "number": "16.0.7",
  "title": "",
  "body": " You have already seen the free group in the exercises. Indeed, Dr. Hogle added Exercise 11B.iii to the notes, and introduced us there to the free group on the set .  "
},
{
  "id": "ch-GroupIsomThms-13",
  "level": "2",
  "url": "ch-GroupIsomThms.html#ch-GroupIsomThms-13",
  "type": "Example",
  "number": "16.0.8",
  "title": "A Quotient of a Free Group - Introducing Generators and Relations.",
  "body": "A Quotient of a Free Group - Introducing Generators and Relations  Let and let be the free group on . Then, let be the normal subgroup of generated by . Then . Indeed, define a homomorphism via and . Then, which means that as is the normal subgroup of generated by , , and . It can also be shown that . Moreover, as , then . We call the set of generators of and the set of relations of Hence, the notational choices! . In fact, every group can be constructed in this way with a set of generators and relations! However, we'll leave that as an unproven fact for now.  More on Generators and Relations  The is for \"generators\" and the is for \"relations.\" Moreover, when we say is the normal subgroup generated by , we mean that is the smallest set in which contains and is a normal subgroup of .   "
},
{
  "id": "exercises-GroupIsomThms-1",
  "level": "2",
  "url": "exercises-GroupIsomThms.html#exercises-GroupIsomThms-1",
  "type": "Exercise",
  "number": "16.16.A",
  "title": "",
  "body": "  Prove the First Isomorphism Theorem for Groups. The steps below should guide your proof.  Show that is a normal subgroup of . Note that this requires proving that is a subgroup and that it's normal. We, unfortunately, don't have a \"normal subgroup test.\"  Show that is a subgroup of (presumably using the subgroup test).  Define the \"obvious\" function to use here . As you may not yet have enough experience to have an instinct as to what the \"obvious\" function is, I'd be happy to have a whole class discussion about ideas\/suggestions that you do have.  Since elements of are cosets (and hence typically have multiple coset representatives), we'll need to show the function we wrote down is \"well-defined.\" That is, using to denote , we need that for any , we have . If this step fails, that's a good hint that our function in the previous step is wrong.  Now that we know is a well-defined function between the two groups we want to show are isomorphic, we need to show that is a group homomorphism. This step should be straight-forward. Use the definition of a homomorphism and the way that is defined.  We also need to show that is a bijection.     "
},
{
  "id": "exercises-GroupIsomThms-2",
  "level": "2",
  "url": "exercises-GroupIsomThms.html#exercises-GroupIsomThms-2",
  "type": "Exercise",
  "number": "16.16.B",
  "title": "",
  "body": "  These are some basic exercises on using the isomorphism theorems.  Prove that using the First Isomorphism Theorem.  Let be a field and let denote the multiplicative identity in . The notation denotes the group of matrices with nonzero determinant and entries in . The notation denotes the subgroup of where the matrices in have determinant . The notation denotes the nonzero elements of , i.e. the elements of which have multiplicative inverses. Lastly, the notation denotes the matrices of the form with . Use the Second Isomorphism Theorem for Groups to show that where .  Note that is a normal subgroup of which is contained in . We will spend some time in the next chapter learning more about the notation for the symmetric groups, . In this exercise, use the Third Isomorphism Theorem for Groups with these groups to prove a new isomorphism. This should be doable even without the knowledge you will learn in the next chapter. Is this too vague of a problem? Do you need more guidance?      "
},
{
  "id": "exercises-GroupIsomThms-3",
  "level": "2",
  "url": "exercises-GroupIsomThms.html#exercises-GroupIsomThms-3",
  "type": "Exercise",
  "number": "16.16.C",
  "title": "",
  "body": "  Prove the Second Isomorphism Theorem for Groups. To prove it, you'll need to show that is a subgroup of , is a normal subgroup of , and is a normal subgroup of . You'll then need to go about showing the claimed isomorphism holds. To show that isomorphism, you can either appeal to , or write down a function and show it is a (well-defined) bijective homomorphism.   "
},
{
  "id": "exercises-GroupIsomThms-4",
  "level": "2",
  "url": "exercises-GroupIsomThms.html#exercises-GroupIsomThms-4",
  "type": "Exercise",
  "number": "16.16.D",
  "title": "",
  "body": "  Prove the Third Isomorphism Theorem for Groups. To prove it, you'll need to show that is a normal subgroup of . You'll then need to go about showing the claimed isomorphism holds. To show that isomorphism, you can either appeal to , or write down a function and show it is a (well-defined) bijective homomorphism.   "
},
{
  "id": "ch-TheGroupSn",
  "level": "1",
  "url": "ch-TheGroupSn.html",
  "type": "Chapter",
  "number": "17",
  "title": "The group <span class=\"process-math\">\\(S_n\\)<\/span>",
  "body": " The group   The learning outcomes in this chapter are to:  ...understand the group better.  ...describe cycle decomposition in .  ...describe the group .   Let be a set and let denote the set of all bijections . When is a finite set of order , we denote this group simply as and typically denote the elements of as . The focus of this chapter is on the group .  Recall how we construct cycle notation for an element, , of . Suppose The cycle indicates that , , and continues in this fashion until we reach . We then repeat this process for each of the cycles in the permutation . Also, recall that we typically write the smallest element in a cycle first, so it is fair to expect to want that for , and similarly for the other cycles in .  As each denotes a function, we should read the notation right to left. Indeed, for the element is shorthand for the function and we know that for each by definition of function composition.  Our first result in this chapter tells us how to deal with the product of elements in whose cycles do not overlap.    Let be cycles whose elements do not overlap. That is, let and with for all and . Then , i.e. and commute.    Let . If for some , then for all , we have . We first show that for any with . If this were not the case and we had for some with , then , which is a contradiction. If we have , then , which is again a contradiction; hence, we know that whenever for some , then for any . Next, note that and since for any .  A similar argument shows that if for some , then . Also, if and for any , then and so in that case as well.  As the functions and yield the same result for all elements , then we have that .      Consider the group and the elements and . Then and so when we’re looking to find the normalizer of in , we “easily” (and without checking either map fully) see that , meaning that .    Our next result we won’t prove explicitly; however, it will give us confidence in our computations of inverses and seems fairly intuitive. Let me know if you want more details on this.    Let . Then .      We say that is a transposition if for some .      Let be a transposition. Then is its own inverse.    The previous proposition should be straight-forward to show. Our next Theorem is important for defining the subgroup of .    Let . Then can be written as a product of transpositions.    As every permutation in can be written as the product of several cycles, it suffices to do this for a single cycle. So, consider the cycle . Then we have which shows that every element of can be written as a product of transpositions. You should convince yourself that this works!      A permutation is called even if it can be decomposed as the product of an even number of transpositions and is called odd if it can be decomposed as the product of an odd number of transpositions.  Note that the fact that this is a normal subgroup (and not just a subset) is at least a proposition that we’re skipping out on at the moment.  The set of all even permutations in is a normal subgroup of called the Alternating Group on elements and denoted .     You should be suspicious of the above definition. We’ve spent quite a bit of time on making sure that functions are well-defined when the domain is a quotient (i.e. in ensuring that different representations of the same element produce the same result). However, the definition is cavalierly assuming that the function given by is at least a well-defined function! For better or for worse, I’m going to skip out on even attempting to prove this fact as I find most proofs of it to be notationally messy and unenlightening.   The next result we’ll explore with examples and also won’t prove in full generality.    A permutation is odd if and only if the number of cycles of even length in a cycle decomposition of is odd.      In , we have that has three cycles of even length, so is an odd permutation. However, has two cycles of even length and so is an even permutation. It is probably worth pointing out at this point that the cycle decomposes into transpositions as which is a decomposition into transpositions. Hence odd length cycles are even permutations and even length cycles are odd permutations. If these last two sentences were confusing, then please forget I ever said them!      An immediate consequence of is that is even whenever both and are even or both are odd and is odd whenever one of and is even and the other is odd. It’s perhaps worth pointing out here that the numbers of transpositions in permutations decompositions ADD together when multiplying the permutations together.    "
},
{
  "id": "ch-TheGroupSn-2",
  "level": "2",
  "url": "ch-TheGroupSn.html#ch-TheGroupSn-2",
  "type": "Objectives",
  "number": "17",
  "title": "The learning outcomes in this chapter are to:",
  "body": " The learning outcomes in this chapter are to:  ...understand the group better.  ...describe cycle decomposition in .  ...describe the group .  "
},
{
  "id": "ch-TheGroupSn-7",
  "level": "2",
  "url": "ch-TheGroupSn.html#ch-TheGroupSn-7",
  "type": "Theorem",
  "number": "17.0.1",
  "title": "",
  "body": "  Let be cycles whose elements do not overlap. That is, let and with for all and . Then , i.e. and commute.    Let . If for some , then for all , we have . We first show that for any with . If this were not the case and we had for some with , then , which is a contradiction. If we have , then , which is again a contradiction; hence, we know that whenever for some , then for any . Next, note that and since for any .  A similar argument shows that if for some , then . Also, if and for any , then and so in that case as well.  As the functions and yield the same result for all elements , then we have that .   "
},
{
  "id": "ch-TheGroupSn-8",
  "level": "2",
  "url": "ch-TheGroupSn.html#ch-TheGroupSn-8",
  "type": "Example",
  "number": "17.0.2",
  "title": "",
  "body": "  Consider the group and the elements and . Then and so when we’re looking to find the normalizer of in , we “easily” (and without checking either map fully) see that , meaning that .   "
},
{
  "id": "prop-cycleinv",
  "level": "2",
  "url": "ch-TheGroupSn.html#prop-cycleinv",
  "type": "Proposition",
  "number": "17.0.3",
  "title": "",
  "body": "  Let . Then .   "
},
{
  "id": "ch-TheGroupSn-11",
  "level": "2",
  "url": "ch-TheGroupSn.html#ch-TheGroupSn-11",
  "type": "Definition",
  "number": "17.0.4",
  "title": "",
  "body": "  We say that is a transposition if for some .   "
},
{
  "id": "prop-transselfinvert",
  "level": "2",
  "url": "ch-TheGroupSn.html#prop-transselfinvert",
  "type": "Proposition",
  "number": "17.0.5",
  "title": "",
  "body": "  Let be a transposition. Then is its own inverse.   "
},
{
  "id": "thm-evenoddperms",
  "level": "2",
  "url": "ch-TheGroupSn.html#thm-evenoddperms",
  "type": "Theorem",
  "number": "17.0.6",
  "title": "",
  "body": "  Let . Then can be written as a product of transpositions.    As every permutation in can be written as the product of several cycles, it suffices to do this for a single cycle. So, consider the cycle . Then we have which shows that every element of can be written as a product of transpositions. You should convince yourself that this works!   "
},
{
  "id": "def-permparity",
  "level": "2",
  "url": "ch-TheGroupSn.html#def-permparity",
  "type": "Definition",
  "number": "17.0.7",
  "title": "",
  "body": "  A permutation is called even if it can be decomposed as the product of an even number of transpositions and is called odd if it can be decomposed as the product of an odd number of transpositions.  Note that the fact that this is a normal subgroup (and not just a subset) is at least a proposition that we’re skipping out on at the moment.  The set of all even permutations in is a normal subgroup of called the Alternating Group on elements and denoted .   "
},
{
  "id": "ch-TheGroupSn-16",
  "level": "2",
  "url": "ch-TheGroupSn.html#ch-TheGroupSn-16",
  "type": "Remark",
  "number": "17.0.8",
  "title": "",
  "body": " You should be suspicious of the above definition. We’ve spent quite a bit of time on making sure that functions are well-defined when the domain is a quotient (i.e. in ensuring that different representations of the same element produce the same result). However, the definition is cavalierly assuming that the function given by is at least a well-defined function! For better or for worse, I’m going to skip out on even attempting to prove this fact as I find most proofs of it to be notationally messy and unenlightening.  "
},
{
  "id": "thm-oddcycles",
  "level": "2",
  "url": "ch-TheGroupSn.html#thm-oddcycles",
  "type": "Theorem",
  "number": "17.0.9",
  "title": "",
  "body": "  A permutation is odd if and only if the number of cycles of even length in a cycle decomposition of is odd.   "
},
{
  "id": "ch-TheGroupSn-19",
  "level": "2",
  "url": "ch-TheGroupSn.html#ch-TheGroupSn-19",
  "type": "Example",
  "number": "17.0.10",
  "title": "",
  "body": "  In , we have that has three cycles of even length, so is an odd permutation. However, has two cycles of even length and so is an even permutation. It is probably worth pointing out at this point that the cycle decomposes into transpositions as which is a decomposition into transpositions. Hence odd length cycles are even permutations and even length cycles are odd permutations. If these last two sentences were confusing, then please forget I ever said them!   "
},
{
  "id": "cor-cycleprods",
  "level": "2",
  "url": "ch-TheGroupSn.html#cor-cycleprods",
  "type": "Corollary",
  "number": "17.0.11",
  "title": "",
  "body": "  An immediate consequence of is that is even whenever both and are even or both are odd and is odd whenever one of and is even and the other is odd. It’s perhaps worth pointing out here that the numbers of transpositions in permutations decompositions ADD together when multiplying the permutations together.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
