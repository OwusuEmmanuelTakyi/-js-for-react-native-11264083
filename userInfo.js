function createUserProfiles(originalNames, modifiedNames) {
    const userProfiles = [];
    for (let i = 0; i < originalNames.length; i++) {
        userProfiles.push({
            id: i + 1,
            originalName: originalNames[i],
            modifiedName: modifiedNames[i]
        });
    }
    return userProfiles;
}


const originalNames = ["Hello", "World", "JavaScript", "Coding", "Owusu", "Learning", "Paul", "Git"];
const modifiedNames = ["HELLO", "world", "JAVASCRIPT", "coding", "OWUSU", "LEARNING", "PAUL", "git"];  // This is task two results

const profiles = createUserProfiles(originalNames, modifiedNames);
console.log(profiles);
