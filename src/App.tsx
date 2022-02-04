import React, { useState } from "react";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedLayout } from "./components/ProtectedLayout";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/profile"
                        element={
                            <ProtectedLayout>
                                <h2>Olá esse é o componente profile!</h2>
                            </ProtectedLayout>
                        }
                    />
                    <Route path="/login" />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
export default App;
