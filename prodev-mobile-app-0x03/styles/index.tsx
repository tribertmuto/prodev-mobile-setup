import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  navGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
    gap: 10,
  },
  largeText: {
    fontSize: 32,
    fontWeight: "700",
    color: "#222",
  },
  smallText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  formGroup: {
    marginBottom: 30,
  },
  placeholderText: {
    fontSize: 14,
    color: "#999",
    marginBottom: 5,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: "#222",
  },
  passwordGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  forgotPasswordText: {
    color: "#007AFF",
    fontSize: 14,
    marginTop: 10,
    alignSelf: "flex-end",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#999",
    fontSize: 14,
  },
  socialMediaButtonGroup: {
    marginBottom: 30,
  },
  socialMediaButton: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
  },
  socialMediaButtonText: {
    fontSize: 16,
    color: "#444",
  },
  subTextGroup: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  subText: {
    color: "#666",
    fontSize: 14,
  },
  subTextJoin: {
    color: "#007AFF",
    fontSize: 14,
    fontWeight: "600",
  },
});
