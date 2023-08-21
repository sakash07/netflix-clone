/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import PlansScreen from "../screens/PlansScreen"; // Update the path to your PlansScreen component
import userReducer from "../features/userSlice"; // Import your Redux slice
import FirestoreMock from "firebase-mock"; // Import the Firestore mock

// Create a real Redux store using configureStore
const store = configureStore({
  reducer: {
    user: userReducer, // Add other reducers if needed
  },
  preloadedState: {
    user: {
      uid: "abc123xyz456",
      email: "user@example.com",
    },
  },
});

// Create a Firestore mock
const firestoreMock = new FirestoreMock();
const database = firestoreMock.database();

firestoreMock
  .collection("customers")
  .doc("abc123xyz456")
  .set({
    subscriptions: [
      {
        role: "basic",
        current_period_end: { seconds: 1679123456 },
        current_period_start: { seconds: 1678901234 },
      },
    ],
  });

firestoreMock
  .collection("products")
  .doc("aw23987rwqq1")
  .set({
    active: true,
    name: "Example Product",
    description: "This is an example product",
    prices: {
      abc123456: {
        currency: "USD",
        amount: 999,
      },
    },
  });

describe("PlansScreen", () => {
  test("renders subscription renewal date", () => {
    render(
      <Provider store={store}>
        <PlansScreen db={database} />
      </Provider>
    );

    const renewalDate = screen.getByText("Renewal Date:");
    expect(renewalDate).toBeInTheDocument();
  });

  test("handles button click", () => {
    render(
      <Provider store={store}>
        <PlansScreen />
      </Provider>
    );

    const subscribeButton = screen.getByText("Subscribe");
    fireEvent.click(subscribeButton);
  });
});
