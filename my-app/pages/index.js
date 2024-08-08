// pages/index.js
import React, { useState } from 'react';
import GenderSelection from '../components/GenderSelection';
import MaleAgeSelection from '../components/MaleAgeSelection';
import FemaleAgeSelection from '../components/FemaleAgeSelection';
import FemaleSuccessPage from '../components/FemaleSuccessPage';
import MenSuccessPage from '../components/MenSuccessPage';
import LearningExperience from '../components/LearningExperience';
import ImportanceLevel from '../components/ImportanceLevel';
import AgreementLevel from '../components/AgreementLevel';
import MotivationLevel from '../components/MotivationLevel';
import ReasonSelection from '../components/ReasonSelection';
import DurationIssue from '../components/DurationIssue';
import FeelingsPage from '../components/FeelingsPage';
import ConsequencesSelection from '../components/ConsequencesSelection';

export default function Home() {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [experience, setExperience] = useState('');
  const [importance, setImportance] = useState('');
  const [agreement, setAgreement] = useState('');
  const [motivation, setMotivation] = useState('');
  const [reasons, setReasons] = useState([]);
  const [duration, setDuration] = useState('');
  const [feelings, setFeelings] = useState('');
  const [consequences, setConsequences] = useState([]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    nextStep();
  };

  const handleAgeSelect = (selectedAge) => {
    setAge(selectedAge);
    nextStep();
  };

  const handleExperienceSelect = (selectedExperience) => {
    setExperience(selectedExperience);
    nextStep();
  };

  const handleImportanceSelect = (selectedImportance) => {
    setImportance(selectedImportance);
    nextStep();
  };

  const handleAgreementSelect = (selectedAgreement) => {
    setAgreement(selectedAgreement);
    nextStep();
  };

  const handleMotivationSelect = (selectedMotivation) => {
    setMotivation(selectedMotivation);
    nextStep();
  };

  const handleReasonSelect = (selectedReasons) => {
    setReasons(selectedReasons);
    nextStep();
  };

  const handleDurationSelect = (selectedDuration) => {
    setDuration(selectedDuration);
    nextStep();
  };

  const handleFeelingsSelect = (selectedFeelings) => {
    setFeelings(selectedFeelings);
    nextStep();
  };

  const handleConsequencesSelect = (selectedConsequences) => {
    setConsequences(selectedConsequences);
    nextStep();
  };

  return (
    <div>
      {step === 1 && <GenderSelection onSelectGender={handleGenderSelect} />}
      {step === 2 && gender === 'Male' && <MaleAgeSelection onSelectAge={handleAgeSelect} />}
      {step === 2 && gender === 'Female' && <FemaleAgeSelection onSelectAge={handleAgeSelect} />}
      {step === 3 && gender === 'Female' && <FemaleSuccessPage onContinue={nextStep} />}
      {step === 3 && gender === 'Male' && <MenSuccessPage onContinue={nextStep} />}
      {step === 4 && <LearningExperience onSelectExperience={handleExperienceSelect} />}
      {step === 5 && <ImportanceLevel onSelectImportance={handleImportanceSelect} />}
      {step === 6 && <AgreementLevel onSelectAgreement={handleAgreementSelect} />}
      {step === 7 && <MotivationLevel onSelectMotivation={handleMotivationSelect} />}
      {step === 8 && <ReasonSelection onSelectReasons={handleReasonSelect} />}
      {step === 9 && <DurationIssue onSelectDuration={handleDurationSelect} />}
      {step === 10 && <FeelingsPage onSelectFeelings={handleFeelingsSelect} />}
      {step === 11 && <ConsequencesSelection onSelectConsequences={handleConsequencesSelect} />}
    </div>
  );
}



