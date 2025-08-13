import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchUsers, createUser, deleteUser } from "./api/users";
import {
  Button,
  FlatList,
  View,
  Text,
  StyleSheet
} from "react-native";

export default function Main() {
  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      refetch();
    }
  });



  if (isLoading)
    return (
      <View style={styles.center}>
        <Text style={styles.loadingText}>Carregando usuários...</Text>
      </View>
    );

  if (isError)
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Erro ao carregar usuários</Text>
      </View>
    );

  return (
    <View style={styles.container}>

      <Text style={styles.subtitle}>Lista de Usuários</Text>
      <FlatList
        data={data}
        refreshing={isFetching}
        onRefresh={refetch}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.userId}>ID: {item.id}</Text>
            <Text style={styles.userName}>Nome: {item.name}</Text>
            <Text style={styles.userEmail}>Email: {item.email}</Text>
            <Text style={styles.userCity}>
              {item.address? `Cidade: ${item.address.city}`  : "Cidade não informada"}
            </Text>
            <Button
              title="Deletar"
              color="red"
              onPress={() => deleteMutation.mutate(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5"
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: {
    fontSize: 18,
    color: "#555"
  },
  errorText: {
    fontSize: 18,
    color: "red"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  subtitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10
  },
  input: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#DDD"
  },
  card: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2 // sombra no Android
  },
  userId: {
    fontSize: 12,
    color: "#888"
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold"
  },
  userEmail: {
    fontSize: 14,
    color: "#555"
  },
  userCity: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10
  }
});
