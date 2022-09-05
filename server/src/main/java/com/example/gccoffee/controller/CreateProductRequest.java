package com.example.gccoffee.controller;

import com.example.gccoffee.model.Category;

import java.util.Objects;

public record CreateProductRequest(String productName, Category category, long price, String description) {
}