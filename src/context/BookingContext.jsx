import React, { createContext, useState, useEffect } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [startDate, setStartDateState] = useState(new Date());
  const [endDate, setEndDateState] = useState(null);
  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [childAges, setChildAges] = useState([]);
  const [totalDays, setTotalDays] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [pkCost, setPkCost] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);

  const setStartDate = (date) => {
    if (endDate && date > endDate) {
      setEndDateState(null); 
    }
    setStartDateState(date);
  };

  const setEndDate = (date) => {
    if (startDate && date < startDate) {
      setStartDateState(null);
    }
    setEndDateState(date);
  };

  useEffect(() => {
    const savedDetails = localStorage.getItem("bookingDetails");
    if (savedDetails) {
      const {
        startDate,
        endDate,
        adults,
        childrenCount,
        childAges,
        totalDays,
        selectedPackage,
        pkCost,
        currentStep,
      } = JSON.parse(savedDetails);

      setStartDateState(new Date(startDate));
      setEndDateState(endDate ? new Date(endDate) : null);
      setAdults(adults);
      setChildrenCount(childrenCount);
      setChildAges(childAges);
      setTotalDays(totalDays);
      setSelectedPackage(selectedPackage);
      setPkCost(pkCost);
      setCurrentStep(currentStep);
    }
  }, []);
  useEffect(() => {
    const bookingDetails = {
      startDate,
      endDate,
      adults,
      childrenCount,
      childAges,
      totalDays,
      selectedPackage,
      pkCost,
      currentStep,
    };
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
  }, [
    startDate,
    endDate,
    adults,
    childrenCount,
    childAges,
    totalDays,
    selectedPackage,
    pkCost,
    currentStep,
  ]);

  const handleAdultsChange = (increment) => {
    setAdults((prev) => Math.max(1, prev + increment));
  };

  const handleChildrenChange = (increment) => {
    const newChildren = Math.max(0, childrenCount + increment);
    setChildrenCount(newChildren);
    setChildAges((prev) => {
      if (newChildren > prev.length) {
        return [...prev, ""];
      } else {
        return prev.slice(0, newChildren);
      }
    });
  };

  const handleChildAgeChange = (index, age) => {
    setChildAges((prev) => {
      const newAges = [...prev];
      newAges[index] = age;
      return newAges;
    });
  };
  const handlePackageSelect = (packageName) => {
    setSelectedPackage(packageName);
    if (packageName == "RO") {
      setPkCost(0);
    } else if (packageName == "BB") {
      setPkCost(1000);
    } else if (packageName == "HB") {
      setPkCost(1800);
    } else {
      setPkCost(2500);
    }
  };
  const contextValue = {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    adults,
    setAdults,
    childrenCount, 
    setChildrenCount, 
    childAges,
    setChildAges,
    totalDays,
    setTotalDays,
    handleAdultsChange,
    handleChildrenChange,
    handleChildAgeChange,
    selectedPackage,
    pkCost,
    setPkCost,
    handlePackageSelect,
    setCurrentStep,
    currentStep,
  };

  return (
    <BookingContext.Provider value={contextValue}>
      {children}
    </BookingContext.Provider>
  );
};
